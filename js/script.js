window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        loader = document.querySelector('.loader');

        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 2000);

        function hideTabContent () {
            tabContent.forEach((item) => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            tabs.forEach((item) => {
                item.classList.remove('tabheader__item_active');
            });
        }

        function showTabContent (i = 0) {
            tabContent[i].classList.add('show', 'fade');
            tabContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, idx) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(idx);
                    }
                });
            }
        });

        const deadline = '2022-08-11';
        function getTimeRemaining(endTime) {
            const timer = Date.parse(endTime) - Date.parse(new Date());
        }
});