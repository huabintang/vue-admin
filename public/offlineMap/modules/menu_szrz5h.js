/**/_jsload2&&_jsload2('menu', 'z.object.extend(fc.prototype,{xa:function(a,b){if(this.P)return t;this.M=a;this.nl=b||s;this.Ea();var c=this,e=a.U.yc;b&&b.K.cf&&(e="pointer");this.P.style.cursor=e;this.Ad&&(this.Ad.style.cursor=e);z.V(document,"mousedown",function(){c.P&&c.aa()});z.V(this.P,"click",function(a){c.aa();na(a)});e=this.m.Ya;e||(e=a.Ya);this.nl?this.nl.addEventListener("rightclick",function(a){c.P&&c.iI(a)}):a.addEventListener("rightclickex",function(a){c.P&&(!a.sb&&!a.Cb)&&c.iI(a)});for(var e=0,f=this.Aa.length;e<f;e++)"menuitem"== this.Aa[e].Mb&&this.Aa[e].xa(a,this),"divider"==this.Aa[e].Mb&&(this.De[this.Aa[e].Aj].R=Bb(this.P,"<div class=\'BMap_cmDivider\'></div>"));this.rr()},jb:function(){this.M&&(this.xa(this.M,this.nl),this.Bh&&(this.Bh=t,this.show()))},remove:function(){this.P&&(this.P.parentNode.removeChild(this.P),this.P=s);this.Ad&&(this.Ad.parentNode.removeChild(this.Ad),this.Ad=s);for(var a=0,b=this.Aa.length;a<b;a++)"menuitem"==this.Aa[a].Mb&&(this.Aa[a].P=s);this.M=this.nl=s},Ea:function(){this.P=Bb(this.M.Ya,"<div unselectable=\'on\'></div>"); this.P.className="BMap_contextMenu";var a=this.P.style;a.font="12px "+H.fontFamily;9>z.ga.ma?this.Ad=Bb(this.M.Ya,"<div class=\'BMap_cmShadow\'></div>"):a.mU=a.BO=a.WebkitBoxShadow="1px 2px 6px #666";return this.P},Ov:function(a){if(a&&!("menuitem"!=a.Mb||""==a.Pg||0>=a.Oi)){for(var b=0,c=this.Aa.length;b<c;b++)if(this.Aa[b]===a)return;this.Aa.push(a);this.Ef.push(a);this.M&&(a.xa(this.M,this),z.R.eb(a.Zc(),"BMap_cmLstItem"),1<this.Aa.length?"menuitem"==this.Aa[this.Aa.length-2].Mb&&z.R.tc(this.Aa[this.Aa.length- 2].Zc(),"BMap_cmLstItem"):"menuitem"==this.Aa[0].Mb&&z.R.eb(this.Aa[0].Zc(),"BMap_cmFstItem"),this.rr())}},removeItem:function(a){if(a&&"menuitem"==a.Mb){for(var b=0,c=this.Aa.length;b<c;b++)this.Aa[b]===a&&(this.Aa[b].remove(),this.Aa.splice(b,1),c--);b=0;for(c=this.Ef.length;b<c;b++)this.Ef[b]===a&&(this.Ef[b].remove(),this.Ef.splice(b,1),c--);this.P&&(0<this.Aa.length&&"menuitem"==this.Aa[this.Aa.length-1].Mb&&z.R.eb(this.Aa[this.Aa.length-1].Zc(),"BMap_cmLstItem"),this.rr())}},hB:function(){this.Aa.push({Mb:"divider", Aj:this.De.length});this.De.push({R:s});this.P&&(this.De[this.De.length-1].R=Bb(this.P,"<div class=\'BMap_cmDivider\'></div>"),this.rr())},jE:function(a){if(this.De[a]){this.De[a].R&&this.De[a].R.parentNode&&this.De[a].R.parentNode.removeChild(this.De[a].R);for(var b=0,c=this.Aa.length;b<c;b++)this.Aa[b]&&("divider"==this.Aa[b].Mb&&this.Aa[b].Aj==a)&&(this.Aa.splice(b,1),c--),this.Aa[b]&&("divider"==this.Aa[b].Mb&&this.Aa[b].Aj>a)&&this.Aa[b].Aj--;this.De.splice(a,1);this.rr()}},ua:function(a,b){this.P.style.left= a+"px";this.P.style.top=b+"px";this.Ad&&(this.Ad.style.left=a+1+"px",this.Ad.style.top=b+2+"px")},show:function(){if(this.Bh!=p&&0!=this.Ef.length){this.Bh=p;this.P&&(this.P.style.visibility="visible");this.Ad&&(this.Ad.style.visibility="visible");var a=new Q("onopen");a.point=this.nw;a.pixel=this.Er;this.dispatchEvent(a)}},aa:function(){if(this.Bh!=t){this.Bh=t;this.P&&(this.P.style.visibility="hidden");this.Ad&&(this.Ad.style.visibility="hidden");var a=new Q("onclose");a.point=this.nw;a.pixel=this.Er; this.dispatchEvent(a)}},yZ:function(a){if(a&&(this.m.cursor=a,this.P&&(this.P.style.cursor=this.m.cursor),this.Ad))this.Ad.style.cursor=this.m.cursor},rr:function(){this.P&&this.Ad&&(this.Ad.style.width=this.P.offsetWidth+"px",this.Ad.style.height=this.P.offsetHeight+"px")},iI:function(a){if(0!=this.Ef.length){this.Er=a.mb;this.nw=this.M.Ib(this.Er);var b=this.Zc().offsetHeight,c=this.Zc().offsetWidth,e=a.mb.x,f=a.mb.y;a.mb.x+c>this.M.width&&(e=a.mb.x-c);a.mb.y+b>this.M.height&&(f=a.mb.y-b);this.ua(e, f);this.show()}}});U(Vf,{addItem:Vf.Ov,removeItem:Vf.removeItem,addSeparator:Vf.hB,removeSeparator:Vf.jE});z.object.extend(ic.prototype,{xa:function(a,b){if(this.P)return t;this.M=a;this.wh=b;b.Zc()&&(this.Ea(),this.fa(),this.zh||(this.zh=p,this.disable()));return p},remove:function(){this.P&&(this.P.parentNode.removeChild(this.P),this.P=s);this.M=this.wh=s},jb:function(){this.wh&&this.M&&this.xa(this.M,this.wh)},Ea:function(){var a=this.m.fm?"<div"+(this.m.id?" id=\'"+this.m.id+"\'":"")+" unselectable=\'on\'><div style=\'width: 17px;height: 17px;margin-right: 3px;display: inline-block;zoom: 1;*display: inline;vertical-align: middle;background: url("+ this.m.fm+") no-repeat;\'></div><span style=\'vertical-align: middle;\'>"+this.Pg+"</span></div>":"<div"+(this.m.id?" id=\'"+this.m.id+"\'":"")+" unselectable=\'on\'><span>"+this.Pg+"</span></div>";this.P=Bb(this.wh.Zc(),a);this.m.fm?(this.Lu=this.P.firstChild,this.mr=this.P.lastChild):this.mr=this.P;a=this.P.style;a.padding="2px 6px";a.margin="0 2px";a.fontSize="14px";a.MozUserSelect="none";a.lineHeight="17px";a.width=this.m.width+"px";this.zh?(a.color="#000",a.cursor="pointer"):(a.color="#aaa",a.cursor= this.M.U.yc);return this.P},fa:function(){var a=this;z.V(this.P,"click",function(b){a.zh?a.Ky&&a.Ky.call&&a.Ky.call(a,a.wh.nw,a.wh.Er,a.wh.nl):na(b)});z.V(this.P,"mousedown",function(a){na(a)});z.V(this.P,"mouseover",function(){a.zh&&(a.P.style.color="#6688cc")});z.V(this.P,"mouseout",function(){a.zh&&(a.P.style.color="#000")})},ut:function(a){a&&(this.Pg=a+"",this.mr&&(this.mr.innerHTML="<span>"+this.Pg+"</span>"))},Tb:function(a){a&&(this.m.fm=a,this.Lu?this.Lu.style.background="url("+a+")":(this.P.innerHTML= "<div"+(this.m.id?" id=\'"+this.m.id+"\'":"")+" unselectable=\'on\'><div style=\'width: 17px;height: 17px;margin-right: 3px;display: inline-block;zoom: 1;*display: inline;vertical-align: middle;background: url("+this.m.fm+") no-repeat;\'></div><span style=\'vertical-align: middle;\'>"+this.Pg+"</span></div>",this.Lu=this.P.firstChild,this.mr=this.P.lastChild))},enable:function(){this.zh=p;this.P&&(this.P.style.color="#000",this.P.style.cursor="pointer")},disable:function(){this.zh=t;this.P&&(this.P.style.color= "#aaa",this.P.style.cursor=this.M.U.yc)}});U(Wf,{setIcon:Wf.Tb,setText:Wf.ut,enable:Wf.enable,disable:Wf.disable}); ');
