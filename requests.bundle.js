webpackJsonp([0],{126:function(A,e,n){var t=n(335);"string"==typeof t&&(t=[[A.i,t,""]]);var o={hmr:!0};o.transform=void 0;n(334)(t,o);t.locals&&(A.exports=t.locals)},335:function(A,e,n){(A.exports=n(333)(!0)).push([A.i,".news-item{display:-ms-flexbox;display:flex;margin:0 0 16px;padding-bottom:12px;border-bottom:1px solid rgba(0,0,0,.12)}.news-item img.no-image{height:128px;background:url("+n(336)+") no-repeat 50%;text-indent:-9999px}.news-item .content{-ms-flex:1;flex:1;padding:0 16px}.news-item .content .title{display:block;font-size:1.5rem;margin-bottom:.5rem;color:inherit}.news-item .content .title:hover{color:#00d1b2}.news-item__date{font-size:12px;font-style:italic}.news-item__source{font-size:14px;font-style:italic}@media screen and (max-width:425px){.news-item{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.news-item .image.is-128x128{height:auto;width:100%}.news-item .content{padding:16px 0}}.footer h4{font-size:1.5rem;font-weight:700;text-transform:uppercase}.arrow{display:none;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #000;position:relative;top:13px;left:8px;transition:all .3s}.arrow--down{border-bottom:5px solid #000;border-top:none;top:-13px}","",{version:3,sources:["/Users/AkmarzhanRaushanova/Desktop/Aibol/Frontcamp/project/src/scss/src/scss/news.scss"],names:[],mappings:"AAEA,WACE,oBAAa,AAAb,aAAa,AACb,gBAAgB,AAChB,oBAAoB,AACpB,uCAA2C,CA8C5C,AAlDD,wBAOI,aAAa,AACb,uDAA0D,AAC1D,mBAAoB,CACrB,AAVH,oBAaI,WAAO,AAAP,OAAO,AACP,cAAe,CAYhB,AA1BH,2BAiBM,cAAc,AACd,iBAAiB,AACjB,oBAAqB,AACrB,aAAc,CAKf,AAzBL,iCAuBQ,aAzBkB,CA0BnB,AAIL,iBACE,eAAe,AACf,iBAAkB,CACnB,AAED,mBACE,eAAe,AACf,iBAAkB,CACnB,AACD,oCArCF,WAsCI,0BAAsB,AAAtB,sBAAsB,AACtB,sBAAmB,AAAnB,kBAAmB,CAWtB,AAlDD,6BA0CM,YAAY,AACZ,UAAW,CACZ,AA5CL,oBA+CM,cAAe,CAChB,CAAA,AAIL,WAEI,iBAAiB,AACjB,gBAAiB,AACjB,wBAAyB,CAC1B,AAGH,OACE,aAAa,AACb,QAAQ,AACR,SAAS,AACT,kCAAkC,AAClC,mCAAmC,AACnC,0BAA2B,AAC3B,kBAAkB,AAClB,SAAS,AACT,SAAS,AACT,kBAAoB,CAOrB,AALC,aACE,6BAA8B,AAC9B,gBAAgB,AAChB,SAAU,CACX",file:"news.scss",sourcesContent:["$link: hsl(171, 100%, 41%);\n\n.news-item {\n  display: flex;\n  margin: 0 0 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, .12);\n\n  img.no-image {\n    height: 128px;\n    background: url('../images/no-image.png') no-repeat center;\n    text-indent: -9999px;\n  }\n\n  .content {\n    flex: 1;\n    padding: 0 16px;\n\n    .title {\n      display: block;\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n      color: inherit;\n\n      &:hover {\n        color: $link;\n      }\n    }\n  }\n\n  &__date {\n    font-size: 12px;\n    font-style: italic;\n  }\n\n  &__source {\n    font-size: 14px;\n    font-style: italic;\n  }\n  @media screen and (max-width: 425px) {\n    flex-direction: column;\n    align-items: center;\n\n    .image.is-128x128 {\n      height: auto;\n      width: 100%;\n    }\n\n    .content {\n      padding: 16px 0;\n    }\n  }\n}\n\n.footer {\n  h4 {\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n}\n\n.arrow {\n  display: none;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid black;\n  position: relative;\n  top: 13px;\n  left: 8px;\n  transition: all 0.3s;\n\n  &--down {\n    border-bottom: 5px solid black;\n    border-top: none;\n    top: -13px;\n  }\n}\n"],sourceRoot:""}])},336:function(A,e){A.exports="data:image/png;base64,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"},337:function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createNewsCards=e.createSourcesList=void 0;var t=n(338),o=n(125);e.createSourcesList=function(A,e){return A.sources.slice(0,10).map(function(A){return function(A,e){var n=A.id,t=A.name,i=A.url;e.sources[n]={id:n,name:t,url:i,selected:!1};var r=document.createElement("li");return r.classList.add("sources__item"),r.setAttribute("data-source",n),r.innerHTML=""+t,r.addEventListener("click",function(A){(0,o.handleSourceClick)(A,e)}),r}(A,e)})},e.createNewsCards=function(A){return A.articles.map(function(A){return function(A){var e=A.source.name,n=(A.author,A.title),o=A.description,i=A.url,r=A.urlToImage,s=A.publishedAt,a=document.createElement("li"),l=r?"<img src="+r+" alt="+n+" />":"<img class='no-image' alt="+n+" />";return a.innerHTML='<div class="news-item">\n      <figure class="image is-128x128">\n        '+l+'\n      </figure>\n      <div class="content">\n        <a href="'+i+'" target="_blank" class="title">'+n+"</a>\n        <p>\n          "+o+'\n          <br />\n          <span class="news-item__source">Source: '+e+'</span>\n          <br />\n          <span class="news-item__date">Published at: '+(0,t.getHumanReadableTime)(s)+"</span>\n        </p>\n      </div>\n    </a>",a}(A)})}},338:function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getHumanReadableTime=function(A){new Date(A);return"test"}},89:function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNews=e.getSourcesList=void 0;var t=n(337),o="https://newsapi.org/v2/",i="300ecf7f1d8c4128876d195675a1f16b";e.getSourcesList=function(A){fetch(o+"sources?apiKey="+i).then(function(A){return A.json()}).then(function(e){var n=(0,t.createSourcesList)(e,A),o=document.querySelector(".sources__list"),i=!0,r=!1,s=void 0;try{for(var a,l=n[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){var c=a.value;o.appendChild(c)}}catch(A){r=!0,s=A}finally{try{!i&&l.return&&l.return()}finally{if(r)throw s}}}).catch(function(A){console.error(A)})},e.getNews=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=A.getSelectedSources();0===n.length&&(n=["google-news"]);var r=n.join(","),s=""+o+A.endpoint+"?apiKey="+i+"&sources="+r+"&page="+e;fetch(s).then(function(A){return A.json()}).then(function(A){var e=(0,t.createNewsCards)(A),n=document.getElementById("news-list"),o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var l=s.value;n.appendChild(l)}}catch(A){i=!0,r=A}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}}).catch(function(A){console.error(A)})}}});