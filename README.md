![image](https://user-images.githubusercontent.com/100159653/165134278-fe400712-7aa6-41c6-9b2c-b6413d93e142.png)
![image](https://user-images.githubusercontent.com/100159653/165134288-c9c0319b-eae4-4a63-ba08-0b4a95176e27.png)
![image](https://user-images.githubusercontent.com/100159653/165134300-bb77af8c-33df-462d-990c-38e53bf899d8.png)
![image](https://user-images.githubusercontent.com/100159653/165134314-b111b821-317a-4400-8499-72b6a2be0182.png)

1. Яке основне призначення каскадної таблиці стилів?

Основное предназначение каскадной таблицы стилей – это сделать красивое оформление для страницы сайта.

2. Для чого необхідні контекстні селектори? 

Их используют тогда, когда нужно использовать стили для элемента только в том случае, если он вложен в другой элемент. Например, у нас есть элемент с классом .menu и мы хотим все ссылки, которые находятся внутри этого menu стилизовать. Для этого нужно использовать селектор .menu a

3. Для чого призначені псевдоелементи? 

Псевдоэлементы – это такое ключевое слово, добавляемое к селектору, которое позволяет стилизовать определенную часть выбранного элемента. Допустим, нам нужно изменить первую строчку абзаца. Остальные строчки при этом должны остаться такими же. Для этого надо использовать псевдоэлемент ::first-line.  Или, например, у нас есть некоторый элемент и нужно добавить картинку внутри элемента. Это можно сделать с помощью HTML, используя тег img, но, кроме этого, эту задачу можно решить и с помощью псевдоэлементов. Можно использовать один из двух псевдоэлементов ::after или ::before для решения этой задачи.

4. Як працює механізм спадкування CSS?

Наследование в CSS работает по следующему принципу: стили, которые мы присвоили некоторому элементту, будут наследоваться всеми элементами, которые распологаются внутри данного элемента. Например, если мы зададим для тега body какой-нибудь шрифт, все элементы на странице будут использовать этот шрифт, если его не переопределить явно (то есть, если мы не зададим какой-то другой шрифт для элемента, тогда будет использоваться тот, который прописан в body). Однако не все свойства наследуются. Например,  такие свойства, как background, border, padding, marging (и многие другие), не наследуются. 

 5. Як визначити специфічність селектора? 
 
Специфичность любого селектора можно определить с помощью таблицы специфичности.
