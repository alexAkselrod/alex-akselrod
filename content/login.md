---
title: Войти в приватный раздел
date: 2020-11-27 17:30:49
---

<script> 
	const urlParams = new URLSearchParams(window.location.toLocaleString());
	const err = urlParams.get("error")
	if (err == 1) {
		document.getElementById("p1").innerHTML = "New text!"; 
	} else {
		document.getElementById("p1").innerHTML = "Old text!"; 
	}
</script>

<div id = "error"/>
<form accept-charset="UTF-8" action = "/cfp_login" method="POST">
    <input type="password" class="form__input" name="password" placeholder="Пароль">
    <button type="submit" class="form__submit">Войти!</button>
</form>
