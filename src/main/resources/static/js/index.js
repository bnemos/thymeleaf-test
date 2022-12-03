document.querySelector("#indexhtml").innerHTML = `
    <link rel="stylesheet" th:href="@{/css/layout.css}">
    <link rel="stylesheet" href="../static/css/layout.css">
    
<nav>
    <ul class="nav-links">
        <a href="#">Сводный перечень КР</a>
        <a href="#">Сводный перечень ООН</a>
        <a href="#">ПЛПД</a>
        <a href="#">ПФТ</a>
        <a href="#">Фрод</a>
        <a href="#">Поиск</a>
    </ul>
    <div class="menu-div">
        Меню
    </div>

    <div class="welcome-div">
        Добро пожаловать!
    </div>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>

`;

