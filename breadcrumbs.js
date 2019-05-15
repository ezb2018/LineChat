var el_2 = document.createElement('script');
el_2.type = 'application/ld+json';
var bread = {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": []
}

$('.breadcrumb li').each(function(index) {
  var item = {}
  var href = $(this).find("a").attr('href');
  if (href) item["@id"] = href // OR location.protocol+"//"+location.host+href;
  item["name"] = $.trim($(this).text()); 

  bread.itemListElement.push({
    "@type": "ListItem",
    "position": index + 1,
    item
  })
});

el_2.text = JSON.stringify(bread);
console.log(JSON.stringify(bread,null,2))
