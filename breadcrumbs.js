let item = [];
let count = 1;
let el = document.createElement('script');
el.type = 'application/ld+json';

if ($(".google-breadcrumb").find('li').length > 0) { 
    $(".google-breadcrumb").find('li').each(function () {
        let url = '';
        if ($(this).find('a').attr('href') == undefined)
            url = window.location.pathname;
        else
            url = $(this).find('a').attr('href');

        item.push({
            "@type": "ListItem",
            "position": count,
            "name": $(this).text(),
            "item": "https://" + window.location.host + url
        });
        count++;
    });

    el.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": item
    });
    document.querySelector('head').appendChild(el);
}
