---
title: Войти в приватный раздел
date: 2020-11-27 17:30:49
---

<script>
	function renderMsg () {
		const urlParams = new URLSearchParams(window.location.search.slice(1));
		const err = urlParams.get("error")
		console.log (err)
		console.log (urlParams)
		if (err == 1) {
			document.getElementById("error").innerHTML = "Неправильный пароль"; 
		}
	}
	window.addEventListener("load", renderMsg);
</script>

<form accept-charset="UTF-8" action = "/cfp_login" method="POST">
    <input type="password" class="form__input" name="password" placeholder="Пароль">
    <button type="submit" class="form__submit">Войти!</button>
	<div id = "error"></div>
</form>
