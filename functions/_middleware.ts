import { CFP_ALLOWED_PATHS } from './constants';
import { getCookieKeyValue } from './utils';
import { getTemplate } from './template';

function checkPath (path: string): bool {
    for (var p of CFP_ALLOWED_PATHS) {
	var r = new RegExp (p || "*")
	if (r.test(path)) {
	    return true;
	}
    }
    return false;
}

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
  env: { CFP_PASSWORD?: string };
}): Promise<Response> {
  const { request, next, env } = context;
  const { pathname, searchParams } = new URL(request.url);
  const { error } = Object.fromEntries(searchParams);
  const cookie = request.headers.get('cookie') || '';
  const cookieKeyValue = await getCookieKeyValue(env.CFP_PASSWORD);

  if (
    cookie.includes(cookieKeyValue) ||
    !checkPath(pathname) ||
    !env.CFP_PASSWORD
  ) {
      console.log (`valid request with path ${pathname}`)
    // Correct hash in cookie, allowed path, or no password set.
    // Continue to next middleware.
    return await next();
  } else {
      console.log (`secured request with path ${pathname}`)
    // No cookie or incorrect hash in cookie. Redirect to login.
      return new Response("", {
	  status: 302,
	  headers: {
	      'Cache-Control': 'no-cache',
              'Location': `/login?redirect=${pathname}`,
	  }
      });
  }
}
