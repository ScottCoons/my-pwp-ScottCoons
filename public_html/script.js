
    function setupTabs () {
        document.querySelectorAll(".tabs__button").forEach(button => {
            button.addEventListener("click", () => {
                const menu = button.parentElement;

                const tabsContainer = menu.parentElement;

                const tabNumber = button.dataset.forTab;

                // const tabToActivate = document.querySelector(`.tabs__content[data-tab=“${tabNumber}”]`)
                //const tabToActivate = document.querySelector(`.tabs__content[data-tab=${tabNumber}]`)

                let tabToActivate;

                if(tabNumber === "1") {
                    tabToActivate = document.getElementById("homeTab");
                } else if (tabNumber === "2") {
                    tabToActivate = document.getElementById("portfolioTab");
                } else if (tabNumber === "3") {
                    tabToActivate = document.getElementById("formTab");
                }

                // const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

                // const menuTabs = Array.from(tabsContainer.querySelectorAll(".tabs__content"))
                // const menuTabs = tabsContainer.querySelectorAll(".tabs__content")
                // console.log("menuTabs:" +menuTabs)
                //
                // let tabToActivate;
                // for(let i = 0; i<menuTabs.length; i++){
                //     console.log(i + "tab:" +menuTabs[i])
                //     if ((i+1).toString() === tabNumber){
                //         tabToActivate = menuTabs[i]
                //     }
                // }



                menu.querySelectorAll(".tabs__button").forEach(button => {
                    button.classList.remove("tabs__button--active");
                });

                document.querySelectorAll(".tabs__content").forEach(tab => {
                    tab.classList.remove("tabs__content--active");
                });

                button.classList.add("tabs__button--active");
                tabToActivate.classList.add("tabs__content--active");
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
            setupTabs();

            document.querySelectorAll(".tabs").forEach(tabsContainer => {
                document.querySelector(".tabs__menu .tabs__button").click();
        });
    });
