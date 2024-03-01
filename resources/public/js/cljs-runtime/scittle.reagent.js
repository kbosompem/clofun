goog.provide('scittle.reagent');
scittle.reagent.rdns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"reagent.dom","reagent.dom",-2138920962,null),null);
scittle.reagent.reagent_dom_namespace = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"render","render",232498073,null),(function (){var ns__46341__auto__ = scittle.reagent.rdns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.dom.render;},new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",-1216356973,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.dom","reagent.dom",-2138920962,null),new cljs.core.Symbol(null,"render","render",232498073,null),"reagent/dom.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"callback-or-compiler","callback-or-compiler",90200066,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"callback-or-compiler","callback-or-compiler",90200066,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"callback-or-compiler","callback-or-compiler",90200066,null)], null)),"Render a Reagent component into the DOM. The first argument may be\n  either a vector (using Reagent's Hiccup syntax), or a React element.\n  The second argument should be a DOM node.\n\n  Optionally takes a callback that is called when the component is in place.\n\n  Returns the mounted component instance.",(cljs.core.truth_(reagent.dom.render)?reagent.dom.render.cljs$lang$test:null)]));
var val__46343__auto__ = cljs.core.deref(var__46342__auto__);
var m__46344__auto__ = cljs.core.meta(var__46342__auto__);
var name__46345__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__46344__auto__);
}
})();
var new_m__46346__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__46341__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__46345__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__46344__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__46344__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__46344__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__46345__auto__,val__46343__auto__,new_m__46346__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__46344__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__46344__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__46345__auto__,val__46343__auto__,new_m__46346__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__46345__auto__,val__46343__auto__,new_m__46346__auto__);

}
}
})()], null);
scittle.core.register_plugin_BANG_(new cljs.core.Keyword("scittle.reagent","reagent","scittle.reagent/reagent",-2011034736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),sci.configs.reagent.reagent.reagent_namespace,new cljs.core.Symbol(null,"reagent.dom","reagent.dom",-2138920962,null),scittle.reagent.reagent_dom_namespace,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),sci.configs.reagent.reagent.reagent_ratom_namespace,new cljs.core.Symbol(null,"reagent.debug","reagent.debug",1010511129,null),sci.configs.reagent.reagent.reagent_debug_namespace], null)], null));

//# sourceMappingURL=scittle.reagent.js.map
