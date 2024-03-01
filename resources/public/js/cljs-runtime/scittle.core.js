goog.provide('scittle.core');
goog.scope(function(){
  scittle.core.goog$module$goog$object = goog.module.get('goog.object');
});
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = true);
var ret__5824__auto___46669 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
scittle.core.time = (function scittle$core$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"start__46637__auto__","start__46637__auto__",-275690966,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__46653__auto__","ret__46653__auto__",-135311663,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"start__46637__auto__","start__46637__auto__",-275690966,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(6),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__46653__auto__","ret__46653__auto__",-135311663,null),null,(1),null))], 0))));
});
(scittle.core.time.cljs$lang$macro = true);

scittle.core.stns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sci.script-tag","sci.script-tag",922462701,null),null);
scittle.core.rns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),null);
scittle.core.namespaces = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"NaN?","NaN?",-277236124,null),new cljs.core.Symbol(null,"parse-boolean","parse-boolean",1597835260,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"update-keys","update-keys",1989413883,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"parse-double","parse-double",539629745,null),new cljs.core.Symbol(null,"parse-long","parse-long",-331085761,null),new cljs.core.Symbol(null,"parse-uuid","parse-uuid",-1353654565,null),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),new cljs.core.Symbol(null,"iteration","iteration",551579478,null),new cljs.core.Symbol(null,"random-uuid","random-uuid",-1574409597,null),new cljs.core.Symbol(null,"update-vals","update-vals",767480843,null)],[(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.NaN_QMARK_;},new cljs.core.Symbol("cljs.core","NaN?","cljs.core/NaN?",-683978047,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"NaN?","NaN?",-277236124,null),"cljs/core.cljs",20,1,12028,12028,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null)),"Returns true if num is NaN, else false",((cljs.core.NaN_QMARK_)?cljs.core.NaN_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.parse_boolean;},new cljs.core.Symbol("cljs.core","parse-boolean","cljs.core/parse-boolean",1744747289,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"parse-boolean","parse-boolean",1597835260,null),"cljs/core.cljs",20,1,12077,12077,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Parse strings \"true\" or \"false\" and return a boolean, or nil if invalid. Note that this explicitly\n  excludes strings with different cases, or space characters.",(cljs.core.truth_(cljs.core.parse_boolean)?cljs.core.parse_boolean.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return scittle.core.time;},new cljs.core.Symbol("scittle.core","time","scittle.core/time",835259980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"scittle.core","scittle.core",-2069969035,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),"scittle/core.cljs",28,1,15,true,15,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null)),"Evaluates expr and prints the time it took. Returns the value of expr.",(cljs.core.truth_(scittle.core.time)?scittle.core.time.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.update_keys;},new cljs.core.Symbol("cljs.core","update-keys","cljs.core/update-keys",1297524294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.11",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"update-keys","update-keys",1989413883,null),"cljs/core.cljs",18,1,11884,11884,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),"m f => {(f k) v ...}\n  Given a map m and a function f of 1-argument, returns a new map whose\n  keys are the result of applying f to the keys of m, mapped to the\n  corresponding values of m.\n  f must return a unique key for each key of m, else the behavior is undefined.",(cljs.core.truth_(cljs.core.update_keys)?cljs.core.update_keys.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.abs;},new cljs.core.Symbol("cljs.core","abs","cljs.core/abs",-1949230943,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.11.10",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),"cljs/core.cljs",18,1,2715,2715,new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null)),"Returns the absolute value of a.",(cljs.core.truth_(cljs.core.abs)?cljs.core.abs.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.parse_double;},new cljs.core.Symbol("cljs.core","parse-double","cljs.core/parse-double",141344022,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"parse-double","parse-double",539629745,null),"cljs/core.cljs",27,1,12050,12050,new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Parse string with floating point components and return a floating point value,\n  or nil if parse fails.\n  Grammar: https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html#valueOf-java.lang.String-",(cljs.core.truth_(cljs.core.parse_double)?cljs.core.parse_double.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.parse_long;},new cljs.core.Symbol("cljs.core","parse-long","cljs.core/parse-long",-738007718,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"parse-long","parse-long",-331085761,null),"cljs/core.cljs",25,1,12038,12038,new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Parse string of decimal digits with optional leading -/+ and return an\n  integer value, or nil if parse fails",(cljs.core.truth_(cljs.core.parse_long)?cljs.core.parse_long.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.parse_uuid;},new cljs.core.Symbol("cljs.core","parse-uuid","cljs.core/parse-uuid",-140527072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"parse-uuid","parse-uuid",-1353654565,null),"cljs/core.cljs",17,1,12067,12067,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Parse a string representing a UUID and return a UUID instance,\n  or nil if parse fails.\n  Grammar: https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html#toString--",(cljs.core.truth_(cljs.core.parse_uuid)?cljs.core.parse_uuid.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.infinite_QMARK_;},new cljs.core.Symbol("cljs.core","infinite?","cljs.core/infinite?",-1069503726,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),"cljs/core.cljs",16,1,2355,2355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true for Infinity and -Infinity values.",(cljs.core.truth_(cljs.core.infinite_QMARK_)?cljs.core.infinite_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.reader.read_string;},new cljs.core.Symbol("cljs.reader","read-string","cljs.reader/read-string",589673466,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"cljs/reader.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,174,174,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Reads one object from the string s.\n   Returns nil when s is nil or empty.\n\n   Reads data in the edn format (subset of Clojure data):\n   http://edn-format.org\n\n   opts is a map as per cljs.tools.reader.edn/read",(cljs.core.truth_(cljs.reader.read_string)?cljs.reader.read_string.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.system_time;},new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),"cljs/core.cljs",18,1,399,399,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns highest resolution time offered by host in milliseconds.",(cljs.core.truth_(cljs.core.system_time)?cljs.core.system_time.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.iteration;},new cljs.core.Symbol("cljs.core","iteration","cljs.core/iteration",405209769,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.11",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"iteration","iteration",551579478,null),"cljs/core.cljs",16,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"somef","somef",1017941162,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"initk","initk",-52811460,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"somef","somef",1017941162,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"initk","initk",-52811460,null),null], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"somef","somef",1017941162,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"initk","initk",-52811460,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"somef","somef",1017941162,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"initk","initk",-52811460,null),null], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,10957,10957,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"somef","somef",1017941162,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"initk","initk",-52811460,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"vf","vf",1319108258,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"somef","somef",1017941162,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"initk","initk",-52811460,null),null], null)], null)], null)),"Creates a seqable/reducible via repeated calls to step,\n  a function of some (continuation token) 'k'. The first call to step\n  will be passed initk, returning 'ret'. Iff (somef ret) is true,\n  (vf ret) will be included in the iteration, else iteration will\n  terminate and vf/kf will not be called. If (kf ret) is non-nil it\n  will be passed to the next step call, else iteration will terminate.\n  This can be used e.g. to consume APIs that return paginated or batched data.\n   step - (possibly impure) fn of 'k' -> 'ret'\n   :somef - fn of 'ret' -> logical true/false, default 'some?'\n   :vf - fn of 'ret' -> 'v', a value produced by the iteration, default 'identity'\n   :kf - fn of 'ret' -> 'next-k' or nil (signaling 'do not continue'), default 'identity'\n   :initk - the first value passed to step, default 'nil'\n  It is presumed that step with non-initk is unreproducible/non-idempotent.\n  If step with initk is unreproducible it is on the consumer to not consume twice.",(cljs.core.truth_(cljs.core.iteration)?cljs.core.iteration.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.random_uuid;},new cljs.core.Symbol("cljs.core","random-uuid","cljs.core/random-uuid",1256838686,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"random-uuid","random-uuid",-1574409597,null),"cljs/core.cljs",18,1,11589,11589,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a pseudo-randomly generated UUID instance (i.e. type 4).",(cljs.core.truth_(cljs.core.random_uuid)?cljs.core.random_uuid.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = scittle.impl.common.cljns;
var var__46342__auto__ = new cljs.core.Var(function(){return cljs.core.update_vals;},new cljs.core.Symbol("cljs.core","update-vals","cljs.core/update-vals",-713262704,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.11",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"update-vals","update-vals",767480843,null),"cljs/core.cljs",18,1,11869,11869,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),"m f => {k (f v) ...}\n  Given a map m and a function f of 1-argument, returns a new map where the keys of m\n  are mapped to result of applying f to the corresponding values of m.",(cljs.core.truth_(cljs.core.update_vals)?cljs.core.update_vals.cljs$lang$test:null)]));
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
})()]),new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"set","set",1945134081,null),scittle.core.goog$module$goog$object.set,new cljs.core.Symbol(null,"get","get",-971253014,null),scittle.core.goog$module$goog$object.get], null),new cljs.core.Symbol(null,"sci.core","sci.core",-5619460,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"stacktrace","stacktrace",1544943133,null),sci.core.stacktrace,new cljs.core.Symbol(null,"format-stacktrace","format-stacktrace",-1807675175,null),sci.core.format_stacktrace], null)], null);
sci.ctx_store.reset_ctx_BANG_(sci.core.init(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),scittle.core.namespaces,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"js","js",-886355190,null),globalThis,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Symbol(null,"Math","Math",2033287572,null),Math], null),new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"clojure.pprint","clojure.pprint",-547379114,null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null)], null)], null)));
scittle.core._BANG_last_ns = cljs.core.volatile_BANG_(cljs.core.deref(sci.core.ns));
scittle.core._eval_string = (function scittle$core$_eval_string(s){
var bm__46354__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,cljs.core.deref(scittle.core._BANG_last_ns)]);
if(cljs.core.map_QMARK_(bm__46354__auto__)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__46354__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__46354__auto__);

try{var rdr = sci.core.reader(s);
var res = null;
while(true){
var form = sci.core.parse_next.cljs$core$IFn$_invoke$arity$2(sci.ctx_store.get_ctx(),rdr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.core","eof","sci.core/eof",-808584945),form)){
cljs.core.vreset_BANG_(scittle.core._BANG_last_ns,cljs.core.deref(sci.core.ns));

return res;
} else {
var G__46689 = sci.core.eval_form(sci.ctx_store.get_ctx(),form);
res = G__46689;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
scittle.core.eval_string = (function scittle$core$eval_string(s){
try{return scittle.core._eval_string(s);
}catch (e46665){var e = e46665;
scittle.impl.error.error_handler(e,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(sci.ctx_store.get_ctx()));

throw e;
}});
goog.exportSymbol('scittle.core.eval_string', scittle.core.eval_string);
scittle.core.register_plugin_BANG_ = (function scittle$core$register_plugin_BANG_(_plug_in_name,sci_opts){
return sci.ctx_store.swap_ctx_BANG_.cljs$core$IFn$_invoke$arity$variadic(sci.core.merge_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci_opts], 0));
});
scittle.core.eval_script_tags_STAR_ = (function scittle$core$eval_script_tags_STAR_(script_tags){
var temp__5804__auto__ = cljs.core.first(script_tags);
if(cljs.core.truth_(temp__5804__auto__)){
var tag = temp__5804__auto__;
var temp__5802__auto__ = tag.getAttribute("src");
if(cljs.core.truth_(temp__5802__auto__)){
var src = temp__5802__auto__;
var req = (new XMLHttpRequest());
var _ = req.open("GET",src,true);
var ___$1 = scittle.core.goog$module$goog$object.set(req,"onload",(function (){
var this$ = this;
var response_46690 = scittle.core.goog$module$goog$object.get(this$,"response");
scittle.core.goog$module$goog$object.set(tag,"scittle_id",src);

sci.ctx_store.swap_ctx_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null),response_46690], 0));

var bm__46354__auto___46691 = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.file,src]);
if(cljs.core.map_QMARK_(bm__46354__auto___46691)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__46354__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__46354__auto___46691);

try{scittle.core.eval_string(response_46690);
}finally {sci.impl.vars.pop_thread_bindings();
}
var G__46666 = cljs.core.rest(script_tags);
return (scittle.core.eval_script_tags_STAR_.cljs$core$IFn$_invoke$arity$1 ? scittle.core.eval_script_tags_STAR_.cljs$core$IFn$_invoke$arity$1(G__46666) : scittle.core.eval_script_tags_STAR_.call(null,G__46666));
}));
return req.send();
} else {
var temp__5802__auto____$1 = cljs.core.not_empty(clojure.string.trim(scittle.core.goog$module$goog$object.get(tag,"textContent")));
if(cljs.core.truth_(temp__5802__auto____$1)){
var text = temp__5802__auto____$1;
var scittle_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("scittle-tag-"));
scittle.core.goog$module$goog$object.set(tag,"scittle_id",scittle_id);

sci.ctx_store.swap_ctx_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051),scittle_id], null),text], 0));

var bm__46354__auto___46692 = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.file,scittle_id]);
if(cljs.core.map_QMARK_(bm__46354__auto___46692)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__46354__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__46354__auto___46692);

try{scittle.core.eval_string(text);
}finally {sci.impl.vars.pop_thread_bindings();
}
var G__46667 = cljs.core.rest(script_tags);
return (scittle.core.eval_script_tags_STAR_.cljs$core$IFn$_invoke$arity$1 ? scittle.core.eval_script_tags_STAR_.cljs$core$IFn$_invoke$arity$1(G__46667) : scittle.core.eval_script_tags_STAR_.call(null,G__46667));
} else {
var G__46668 = cljs.core.rest(script_tags);
return (scittle.core.eval_script_tags_STAR_.cljs$core$IFn$_invoke$arity$1 ? scittle.core.eval_script_tags_STAR_.cljs$core$IFn$_invoke$arity$1(G__46668) : scittle.core.eval_script_tags_STAR_.call(null,G__46668));
}
}
} else {
return null;
}
});
scittle.core.eval_script_tags = (function scittle$core$eval_script_tags(){
var script_tags = document.querySelectorAll("script[type='application/x-scittle']");
return scittle.core.eval_script_tags_STAR_(script_tags);
});
goog.exportSymbol('scittle.core.eval_script_tags', scittle.core.eval_script_tags);
scittle.core.auto_load_disabled_QMARK_ = cljs.core.volatile_BANG_(false);
/**
 * By default, scittle evaluates script nodes on the DOMContentLoaded
 *   event using the eval-script-tags function. This function disables
 *   that behavior.
 */
scittle.core.disable_auto_eval = (function scittle$core$disable_auto_eval(){
return cljs.core.vreset_BANG_(scittle.core.auto_load_disabled_QMARK_,true);
});
goog.exportSymbol('scittle.core.disable_auto_eval', scittle.core.disable_auto_eval);
document.addEventListener("DOMContentLoaded",(function (){
if(cljs.core.truth_(cljs.core.deref(scittle.core.auto_load_disabled_QMARK_))){
return null;
} else {
return scittle.core.eval_script_tags();
}
}),false);
cljs.core.enable_console_print_BANG_();
sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.core.print_fn,cljs.core.constantly(cljs.core._STAR_print_fn_STAR_));

//# sourceMappingURL=scittle.core.js.map
