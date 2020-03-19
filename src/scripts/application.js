// Sidebar toggle
$('#app-sidebar-toggle').on('click', toggleSidebar);
$('#app-sidebar-scrim').on('click', toggleSidebar);

var isMobile = window.matchMedia("only screen and (max-width: 979px)").matches;

if (!isMobile) {
    // Don't remember users settings on mobile - having the nav pop over content when a page first loads is annoying
    var navExpanded = localStorage.getItem('navExpanded');

    // Sidebar starts expanded
    if (navExpanded === 'false') {
        toggleSidebar();
    }
}
else {
    // Won't change anything else but will stop the double press confusion when toggling
    $('#app-wrapper').attr('aria-expanded', 'false');
}
function toggleSidebar(override) {
    var appWrapper = $('#app-wrapper');
    var mainBody = $('body');
    var newToggleSetting;

    if (typeof override === 'string') {
        newToggleSetting = override;
    }
    else {
        newToggleSetting = (appWrapper.attr('aria-expanded') === 'false') ? 'true' : 'false';
    }
    appWrapper.attr('aria-expanded', newToggleSetting);
    $('#app-sidebar-toggle').attr('aria-expanded', newToggleSetting);
    appWrapper.toggleClass('expanded', (newToggleSetting == 'true'));
    mainBody.toggleClass('expanded', (newToggleSetting == 'true'));

    localStorage.setItem('navExpanded', newToggleSetting);
}