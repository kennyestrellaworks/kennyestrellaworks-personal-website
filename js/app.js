const DOMStrings = {
    contentProjectsItemsPrimaryBox: document.querySelector('.content__projects-items-primary-box'),
    contentProjectsItemsSecondaryBox: document.querySelector('.content__projects-items-secondary-box'),    
    contentProjectsItemsIcons: '',
    contentProjectsItem: '',
    contentProjectsItemOverlay: '',

    contentProjectsWrap: document.querySelector('.content__projects-wrap'),
    contentProfile: document.querySelector('.content__profile'),
    contentProfileWrapContent: document.querySelector('.content__profile-wrap-content'),
    contentShowProfile: document.querySelector('.content__show-profile'),

    contentProfileClose: document.querySelector('.content__profile-close'),
    contentShowProfileBox: document.querySelector('.content__show-profile-box'),
    // Contact form popup.
    contentContactButton: document.querySelector('.content__contact-button'),
    contactFormWrap: document.querySelector('.contact-form__wrap'),
    pageOverlay: document.querySelector('.page-overlay'),
    contactFormCloseButton: document.querySelector('.contact-form__close-button'),
}


const LayoutSetup = {
    containerWidth: 1400, // Decided content width.
    containerWidthEdit: 0,
    contentProfileWidth: 0,
    contentProjectsWrapWidth: 0,
    contentProfileWrapContentWidth: 360,
    contentProfileWrapContentWidthEdit: 0
}

class UI {
    static hideAndShowElement(DOMSTrings, className, action) {
        if (action == 'add') {
            DOMSTrings.classList.add(className)
        } else if (action == 'remove') {
            DOMSTrings.classList.remove(className)
        }        
    }
    static setProfileSectionWidth() {
        // Controls 'DOMStrings.contentProfileWrapContent'.
        DOMStrings.contentProfileWrapContent.style.width = `${LayoutSetup.contentProfileWrapContentWidthEdit / 10}rem`
    }
    static setProfileSectionContainerWidth() {
        // Controls 'DOMStrings.contentProfile' and 'DOMStrings.contentShowProfile'.
        LayoutSetup.contentProfileWidth = `${LayoutSetup.containerWidthEdit / 10}rem`
        DOMStrings.contentProfile.style.width = LayoutSetup.contentProfileWidth
        DOMStrings.contentShowProfile.style.width = LayoutSetup.contentProfileWidth
    }
    static setProjectsSectionWidth(browserWidth) {
        // Controls 'DOMSTrings.contentProjectsWrap'.
        let contentProjectsWrapWidth = 0
        if (browserWidth <= 1270)  {
            DOMStrings.contentProjectsWrap.style.width = `100%`
        } else {
            contentProjectsWrapWidth = LayoutSetup.containerWidthEdit - LayoutSetup.contentProfileWrapContentWidthEdit
            DOMStrings.contentProjectsWrap.style.width = `${contentProjectsWrapWidth / 10}rem`  
        }
    }
    static displayProjects(data) {
        // Rendering project items.
        let featuredProjects = ''
        let secondaryProjects = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].category == 'featured') {
                featuredProjects += `
                <div class="card-1 content__projects-item" data-id="${data[i].id}">
                    <div class="content__projects-item-overlay content__projects-item-overlay-hide">
                        <div class="content__projects-item-overlay-buttons">
                            <button class="button-2">                                                          
                                <a class="button-2__text" href="${data[i].sourceCode}" target="_blank">
                                    <svg class="button-icon button-icon__source-code" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="icon-source-code" transform="translate(-7206 -2477)">
                                            <rect id="Rectangle_1828" data-name="Rectangle 1828" width="34" height="34" transform="translate(7206 2477)" fill="red" opacity="0"/>
                                            <rect id="Rectangle_1829" data-name="Rectangle 1829" width="34" height="29" transform="translate(7206 2480)" fill="#802424" opacity="0"/>
                                            <g id="code-working-sharp" transform="translate(7207 2485)">
                                                <ellipse id="Ellipse_22" data-name="Ellipse 22" cx="1.938" cy="1.938" rx="1.938" ry="1.938" transform="translate(14.061 6.915)"/>
                                                <ellipse id="Ellipse_23" data-name="Ellipse 23" cx="1.938" cy="1.938" rx="1.938" ry="1.938" transform="translate(19.688 6.915)"/>
                                                <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="1.938" cy="1.938" rx="1.938" ry="1.938" transform="translate(8.434 6.915)"/>
                                                <path id="Path_26" data-name="Path 26" d="M10.222,132.106.1,123.253,10.222,114.4l1.726,1.976-7.859,6.877,7.859,6.877Z" transform="translate(-0.1 -114.4)"/>
                                                <path id="Path_27" data-name="Path 27" d="M324.126,132.106l-1.726-1.976,7.859-6.877-7.859-6.877,1.726-1.976,10.122,8.853Z" transform="translate(-302.249 -114.4)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    source code
                                </a>
                            </button>
                            <button class="button-2">                                                    
                                <a class="button-2__text" href="${data[i].liveDemo}" target="_blank">
                                    <svg class="button-icon button-icon__live-demo" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="icon-live-demo" transform="translate(-7156 -2486)">
                                        <rect id="Rectangle_1813" data-name="Rectangle 1813" width="34" height="34" transform="translate(7156 2486)" fill="red" opacity="0"/>
                                        <rect id="Rectangle_1777" data-name="Rectangle 1777" width="34" height="29" transform="translate(7156 2489)" fill="#802424" opacity="0"/>
                                        <path id="desktop-sharp" d="M46.961,48H17.068A1.068,1.068,0,0,0,16,49.068V70.42a1.068,1.068,0,0,0,1.068,1.068h11.21v2.135h-4.8v2.135H40.555V73.623h-4.8V71.488h11.21a1.068,1.068,0,0,0,1.068-1.068V49.068A1.068,1.068,0,0,0,46.961,48Zm-1.335,2.4V64.815H18.4V50.4ZM30.955,68.424a1.068,1.068,0,1,1,.92.92A1.068,1.068,0,0,1,30.955,68.424Z" transform="translate(7140.97 2441)"/>
                                        </g>
                                    </svg>
                                    live demo
                                </a>
                            </button>
                        </div>
                        <div class="content__projects-item-overlay-background"></div>
                    </div>
                    <div class="card-1__area-1">
                        <img src="${data[i].imageUrl}" alt="${data[i].headingColored} ${data[i].headingExtra}" class="card-1__area-1-img">
                    </div>
                    <div class="card-1__area-2">
                        <div class="card-1__area-2-wrap">
                            <div class="heading-stylized-1">
                                <div class="heading-stylized-1__colored">
                                    <h1 class="heading-stylized-1__unskew">${data[i].headingColored} </h1>
                                </div>
                                <h1 class="heading-stylized-1__extra">${data[i].headingExtra}</h1>
                            </div>
                            <div class="card-1__blurb">${data[i].blurb}</div>
                            <ul class="card-1__icons content__projects-items-icons"></ul>
                        </div>
                    </div>
                </div>
                `
            } else if (data[i].category == 'secondary') {
                secondaryProjects += `
                <div class="card-2 content__projects-item" data-id="${data[i].id}">
                    <div class="content__projects-item-overlay content__projects-item-overlay-hide">
                        <div class="content__projects-item-overlay-buttons">
                            <button class="button-2">                                                                                          
                                <a class="button-2__text" href="${data[i].sourceCode}" target="_blank">
                                    <svg class="button-icon button-icon__source-code" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="icon-source-code" transform="translate(-7206 -2477)">
                                            <rect id="Rectangle_1828" data-name="Rectangle 1828" width="34" height="34" transform="translate(7206 2477)" fill="red" opacity="0"/>
                                            <rect id="Rectangle_1829" data-name="Rectangle 1829" width="34" height="29" transform="translate(7206 2480)" fill="#802424" opacity="0"/>
                                            <g id="code-working-sharp" transform="translate(7207 2485)">
                                                <ellipse id="Ellipse_22" data-name="Ellipse 22" cx="1.938" cy="1.938" rx="1.938" ry="1.938" transform="translate(14.061 6.915)"/>
                                                <ellipse id="Ellipse_23" data-name="Ellipse 23" cx="1.938" cy="1.938" rx="1.938" ry="1.938" transform="translate(19.688 6.915)"/>
                                                <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="1.938" cy="1.938" rx="1.938" ry="1.938" transform="translate(8.434 6.915)"/>
                                                <path id="Path_26" data-name="Path 26" d="M10.222,132.106.1,123.253,10.222,114.4l1.726,1.976-7.859,6.877,7.859,6.877Z" transform="translate(-0.1 -114.4)"/>
                                                <path id="Path_27" data-name="Path 27" d="M324.126,132.106l-1.726-1.976,7.859-6.877-7.859-6.877,1.726-1.976,10.122,8.853Z" transform="translate(-302.249 -114.4)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    source code
                                </a>
                            </button>
                            <button class="button-2">
                                <a class="button-2__text" href="${data[i].liveDemo}" target="_blank">
                                    <svg class="button-icon button-icon__live-demo" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="icon-live-demo" transform="translate(-7156 -2486)">
                                        <rect id="Rectangle_1813" data-name="Rectangle 1813" width="34" height="34" transform="translate(7156 2486)" fill="red" opacity="0"/>
                                        <rect id="Rectangle_1777" data-name="Rectangle 1777" width="34" height="29" transform="translate(7156 2489)" fill="#802424" opacity="0"/>
                                        <path id="desktop-sharp" d="M46.961,48H17.068A1.068,1.068,0,0,0,16,49.068V70.42a1.068,1.068,0,0,0,1.068,1.068h11.21v2.135h-4.8v2.135H40.555V73.623h-4.8V71.488h11.21a1.068,1.068,0,0,0,1.068-1.068V49.068A1.068,1.068,0,0,0,46.961,48Zm-1.335,2.4V64.815H18.4V50.4ZM30.955,68.424a1.068,1.068,0,1,1,.92.92A1.068,1.068,0,0,1,30.955,68.424Z" transform="translate(7140.97 2441)"/>
                                        </g>
                                    </svg> 
                                    live demo
                                </a>
                            </button>
                        </div>
                        <div class="content__projects-item-overlay-background"></div>
                    </div>
                    <div class="card-2__area-1">
                        <img src="${data[i].imageUrl}" alt="${data[i].headingColored} ${data[i].headingExtra}" class="card-2__area-1-img">
                    </div>
                    <div class="card-2__area-2">
                        <div class="card-2__area-2-heading">
                            <h1 class="heading-3">${data[i].headingColored}</h1>
                        </div>
                        <div class="card-2__blurb">${data[i].blurb}</div>
                        <ul class="card-2__icons content__projects-items-icons"></ul>
                    </div>
                </div>
                `
            }
            DOMStrings.contentProjectsItemsPrimaryBox.innerHTML = featuredProjects
            DOMStrings.contentProjectsItemsSecondaryBox.innerHTML = secondaryProjects            
        }
        DOMStrings.contentProjectsItemsIcons = document.querySelectorAll('.content__projects-items-icons')
        DOMStrings.contentProjectsItem = document.querySelectorAll('.content__projects-item')
        DOMStrings.contentProjectsItemOverlay = document.querySelectorAll('.content__projects-item-overlay')

        // Rendering web technologies and tools used.
        let itemIcons = ''
        for (let i = 0; i < DOMStrings.contentProjectsItem.length; i++) {
            for (let j = 0; j < data[i].icons.length; j++) {
                itemIcons += `
                <li class="content__projects-items-icons-icon">
                    <img src="images/icon-${data[i].icons[j]}.svg" alt="${data[i].icons[j]}">
                </li>
                `
            }
            DOMStrings.contentProjectsItemsIcons[i].innerHTML = itemIcons
            itemIcons = ''
        }
        Events.projectItemHover()
        Events.projectItemUnHover()
    }
}

class Events {
    static contactFormCloseButton() {
        DOMStrings.contactFormCloseButton.addEventListener('click', function() {
            UI.hideAndShowElement(DOMStrings.pageOverlay, 'page-overlay__hide', 'add')
            UI.hideAndShowElement(DOMStrings.pageOverlay, 'page-overlay__default', 'remove')
            UI.hideAndShowElement(DOMStrings.contactFormWrap, 'contact-form__wrap-hide', 'add')
            UI.hideAndShowElement(DOMStrings.contactFormWrap, 'contact-form__wrap-default', 'remove')
            UI.hideAndShowElement(DOMStrings.contentContactButton, 'button-1', 'add')
            UI.hideAndShowElement(DOMStrings.contentContactButton, 'button-1__active', 'remove')
        })
    }
    static contentContactButton() {
        DOMStrings.contentContactButton.addEventListener('click', function() {
            UI.hideAndShowElement(DOMStrings.pageOverlay, 'page-overlay__hide', 'remove')
            UI.hideAndShowElement(DOMStrings.pageOverlay, 'page-overlay__default', 'add')
            UI.hideAndShowElement(DOMStrings.contactFormWrap, 'contact-form__wrap-hide', 'remove')
            UI.hideAndShowElement(DOMStrings.contactFormWrap, 'contact-form__wrap-default', 'add')
            UI.hideAndShowElement(DOMStrings.contentContactButton, 'button-1', 'remove')
            UI.hideAndShowElement(DOMStrings.contentContactButton, 'button-1__active', 'add')
        })
    }
    static closeProfileSection() {
        DOMStrings.contentProfileClose.addEventListener('click', function() {
            DOMStrings.contentShowProfileBox.classList.remove('content__show-profile-box-active')
            UI.hideAndShowElement(DOMStrings.contentProfileWrapContent, 'content__profile-wrap-content-hide', 'add')
            UI.hideAndShowElement(DOMStrings.contentProfileWrapContent, 'content__profile-wrap-content-default', 'remove')
            UI.hideAndShowElement(DOMStrings.contentProfileClose, 'content__profile-close-hide', 'add')
            UI.hideAndShowElement(DOMStrings.contentProfileClose, 'content__profile-close-default', 'remove')
        })
    }
    static contentShowProfileBoxButton() {
        DOMStrings.contentShowProfileBox.addEventListener('click', function() {
            DOMStrings.contentShowProfileBox.classList.add('content__show-profile-box-active')
            UI.hideAndShowElement(DOMStrings.contentProfileClose, 'content__profile-close-hide', 'remove')
            UI.hideAndShowElement(DOMStrings.contentProfileClose, 'content__profile-close-default', 'add')
            Events.closeProfileSection()
            UI.hideAndShowElement(DOMStrings.contentProfileWrapContent, 'content__profile-wrap-content-hide', 'remove')
            UI.hideAndShowElement(DOMStrings.contentProfileWrapContent, 'content__profile-wrap-content-default', 'add')
        })
    }
    // Project item mouseover.
    static projectItemHover() {               
        for (let i = 0; i < DOMStrings.contentProjectsItem.length; i++) {
            DOMStrings.contentProjectsItem[i].addEventListener('mouseover', function() {
                DOMStrings.contentProjectsItemOverlay[i].classList.remove('content__projects-item-overlay-hide')
                DOMStrings.contentProjectsItemOverlay[i].classList.add('content__projects-item-overlay-show')
            })
        }
    }
    // Project item mouseout.
    static projectItemUnHover() {
        for (let i = 0; i < DOMStrings.contentProjectsItem.length; i++) {
            DOMStrings.contentProjectsItem[i].addEventListener('mouseout', function() {
                DOMStrings.contentProjectsItemOverlay[i].classList.add('content__projects-item-overlay-hide')
                DOMStrings.contentProjectsItemOverlay[i].classList.remove('content__projects-item-overlay-show')
            })
        }
    }
    // Browser resize.
    static windowResize() {
        window.addEventListener('resize', function() {
            let browserWidth = Process.getBrowserWidth()
            Process.updateContainerWidth(browserWidth)
            Process.udpateProfileSectionWidth(browserWidth)
            UI.setProfileSectionWidth(browserWidth)
            UI.setProfileSectionContainerWidth()
            UI.setProjectsSectionWidth(browserWidth)
            if (!DOMStrings.contentShowProfileBox.classList.contains('content__show-profile-box-active')) {
                Process.hideProfileSection(browserWidth)
            }
            if (DOMStrings.contentShowProfileBox.classList.contains('content__show-profile-box-active')) {
                if (browserWidth > 1270) {
                    DOMStrings.contentShowProfileBox.classList.remove('content__show-profile-box-active')
                    DOMStrings.contentProfileClose.classList.add('content__profile-close-hide')
                    DOMStrings.contentProfileClose.classList.remove('content__profile-close-default')
                }
            }
        })
    }
}

class Process {
    static hideProfileSection(browserWidth) {        
        if (browserWidth <= 1270) {
            DOMStrings.contentProfileWrapContent.classList.remove('content__profile-wrap-content-default')
            DOMStrings.contentProfileWrapContent.classList.add('content__profile-wrap-content-hide')
            DOMStrings.contentShowProfile.classList.add('content__show-profile-default')         
            DOMStrings.contentShowProfile.classList.remove('content__show-profile-hide')            
            Events.contentShowProfileBoxButton()
        } else {
            DOMStrings.contentProfileWrapContent.classList.add('content__profile-wrap-content-default')
            DOMStrings.contentProfileWrapContent.classList.remove('content__profile-wrap-content-hide')
            DOMStrings.contentShowProfile.classList.remove('content__show-profile-default')
            DOMStrings.contentShowProfile.classList.add('content__show-profile-hide')
            DOMStrings.contentProfileClose.classList.remove('content__profile-close-default')
            DOMStrings.contentProfileClose.classList.add('content__profile-close-hide')
        }
        if (!DOMStrings.contentShowProfileBox.classList.contains('content__show-profile-box-active')) {{
            DOMStrings.contentProfileClose.classList.remove('content__profile-close-default')
            DOMStrings.contentProfileClose.classList.add('content__profile-close-hide')
        }}
    }
    static udpateProfileSectionWidth(browserWidth) {
        if (browserWidth >= 1300) {
            LayoutSetup.contentProfileWrapContentWidthEdit = 360
        } else {            
            LayoutSetup.contentProfileWrapContentWidthEdit = 320
        }  
    }
    static updateContainerWidth(browserWidth) {
        if (browserWidth >= 1400) {
            LayoutSetup.containerWidthEdit = 1400
        } else {
            LayoutSetup.containerWidthEdit = browserWidth
        }
    } 
    static getBrowserWidth() {
        let windowInnerWidth = window.innerWidth
        return windowInnerWidth
    }
}

class Data {
    static async getProjects() {
        try {
            let fetchData = await fetch('../data.json')
            let awaitData = await fetchData.json()
            let projects = awaitData.projects
            projects = projects.map(product => {
                const {id} = product.sys
                const {headingColored, headingExtra, category, blurb} = product.fields
                const {image: {fields: {file: {imageUrl}}}} = product.fields
                const {icons} = product.fields
                const {liveDemo, sourceCode} = product.fields
                return {id, headingColored, headingExtra, category, blurb, imageUrl, icons, liveDemo, sourceCode}
            })
            return projects
        }catch (error) {}
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    Events.windowResize()
    let browserWidth = Process.getBrowserWidth()
    Process.updateContainerWidth(browserWidth)
    Process.udpateProfileSectionWidth(browserWidth) 
    UI.setProfileSectionWidth() 
    Events.contentContactButton()
    Events.contactFormCloseButton()
    
    Data.getProjects().then(function(data) {
        UI.displayProjects(data)                
        UI.setProfileSectionContainerWidth()
        UI.setProjectsSectionWidth(browserWidth)
        Process.hideProfileSection(browserWidth)
    })
})