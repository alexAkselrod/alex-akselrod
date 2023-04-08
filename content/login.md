---
title: Войти в приватный раздел
date: 2020-11-27 17:30:49
---

<script>
	function renderMsg () {
		const urlParams = new URLSearchParams(window.location.search.slice(1));
		const err = urlParams.get("error")
		const redirect = urlParams.get("redirect")
		console.log (err)
		console.log (urlParams)
		if (err == 1) {
			document.getElementById("error").innerHTML = "Неправильный пароль"; 
		}
		if (redirect) {
			document.getElementById('redirect').value = redirect;
		}
	}
	window.addEventListener("load", renderMsg);
</script>

<style>
	.form__input {
		background-color: var(--logo);
		font-size: 20px;
	}

	.form__submit {
		background-color: var(--muted);
		font-size: 20px;
	}
</style>

<form accept-charset="UTF-8" action = "/cfp_login" method="POST">
	<input type = "hidden" name = "redirect" id = "redirect" value = "">
    <input type="password" class="form__input" name="password" placeholder="Пароль">
    <button type="submit" class="form__submit">Войти!</button> <div id = "error"></div>
</form>
