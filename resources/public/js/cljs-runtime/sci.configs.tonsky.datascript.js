goog.provide('sci.configs.tonsky.datascript');
sci.configs.tonsky.datascript.core_ns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),null);
sci.configs.tonsky.datascript.db_ns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),null);
sci.configs.tonsky.datascript.core_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"pull-many","pull-many",1857679657,null),new cljs.core.Symbol(null,"entity","entity",1189561251,null),new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.Symbol(null,"listen!","listen!",-115577950,null),new cljs.core.Symbol(null,"datom","datom",1268975437,null),new cljs.core.Symbol(null,"db-with","db-with",233242042,null),new cljs.core.Symbol(null,"index-range","index-range",1044940937,null),new cljs.core.Symbol(null,"conn-from-db","conn-from-db",-184109372,null),new cljs.core.Symbol(null,"reset-conn!","reset-conn!",1315177148,null),new cljs.core.Symbol(null,"transact!","transact!",817805717,null),new cljs.core.Symbol(null,"squuid","squuid",-1898207797,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"serializable","serializable",1941609404,null),new cljs.core.Symbol(null,"conn-from-datoms","conn-from-datoms",-1502002909,null),new cljs.core.Symbol(null,"from-serializable","from-serializable",945516427,null),new cljs.core.Symbol(null,"empty-db","empty-db",1486862004,null),new cljs.core.Symbol(null,"init-db","init-db",-1059254491,null),new cljs.core.Symbol(null,"touch","touch",-1158163300,null),new cljs.core.Symbol(null,"tx0","tx0",-4656209,null),new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"create-conn","create-conn",2071410861,null)],[(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.with$;},new cljs.core.Symbol("datascript.core","with","datascript.core/with",-1124098173,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"with","with",104234651,null),"datascript/core.cljc",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,256,256,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)),"Same as [[transact!]], but applies to an immutable database value. Returns transaction report (see [[transact!]]).",(cljs.core.truth_(datascript.core.with$)?datascript.core.with$.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.pull_many;},new cljs.core.Symbol("datascript.core","pull-many","datascript.core/pull-many",394351057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"pull-many","pull-many",1857679657,null),"datascript/core.cljc",12,1,120,130,cljs.core.List.EMPTY,"Same as [[pull]], but accepts sequence of ids and returns sequence of maps.\n\n             Usage:\n\n             ```\n             (pull-many db [:db/id :name] [1 2])\n             ; => [{:db/id 1, :name \"Ivan\"}\n             ;     {:db/id 2, :name \"Oleg\"}]\n             ```",(cljs.core.truth_(datascript.core.pull_many)?datascript.core.pull_many.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.entity;},new cljs.core.Symbol("datascript.core","entity","datascript.core/entity",-1406213973,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"entity","entity",1189561251,null),"datascript/core.cljc",9,1,23,72,cljs.core.List.EMPTY,"Retrieves an entity by its id from database. Entities are lazy map-like structures to navigate DataScript database content.\n\n             For `eid` pass entity id or lookup attr:\n             \n                 (entity db 1)\n                 (entity db [:unique-attr :value])\n            \n             If entity does not exist, `nil` is returned:\n\n                 (entity db 100500) ; => nil\n\n             Creating an entity by id is very cheap, almost no-op, as attr access is on-demand:\n\n                 (entity db 1) ; => {:db/id 1}\n\n             Entity attributes can be lazily accessed through key lookups:\n             \n                 (:attr (entity db 1)) ; => :value\n                 (get (entity db 1) :attr) ; => :value\n\n             Cardinality many attributes are returned sequences:\n\n                 (:attrs (entity db 1)) ; => [:v1 :v2 :v3]\n\n             Reference attributes are returned as another entities:\n\n                 (:ref (entity db 1)) ; => {:db/id 2}\n                 (:ns/ref (entity db 1)) ; => {:db/id 2}\n\n             References can be walked backwards by prepending `_` to name part of an attribute:\n\n                 (:_ref (entity db 2)) ; => [{:db/id 1}]\n                 (:ns/_ref (entity db 2)) ; => [{:db/id 1}]\n             \n             Reverse reference lookup returns sequence of entities unless attribute is marked as `:db/isComponent`:\n\n                 (:_component-ref (entity db 2)) ; => {:db/id 1}\n\n             Entity gotchas:\n               \n             - Entities print as map, but are not exactly maps (they have compatible get interface though).\n             - Entities are effectively immutable \u201Cviews\u201D into a particular version of a database.\n             - Entities retain reference to the whole database.\n             - You can\u2019t change database through entities, only read.\n             - Creating an entity by id is very cheap, almost no-op (attributes are looked up on demand).\n             - Comparing entities just compares their ids. Be careful when comparing entities taken from different dbs or from different versions of the same db.\n             - Accessed entity attributes are cached on entity itself (except backward references).\n             - When printing, only cached attributes (the ones you have accessed before) are printed. See [[touch]].",(cljs.core.truth_(datascript.core.entity)?datascript.core.entity.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.q;},new cljs.core.Symbol("datascript.core","q","datascript.core/q",2106686416,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"q","q",-1965434072,null),"datascript/core.cljc",4,1,135,147,cljs.core.List.EMPTY,"Executes a datalog query. See [docs.datomic.com/on-prem/query.html](https://docs.datomic.com/on-prem/query.html).\n\n          Usage:\n          \n          ```\n          (q '[:find ?value\n               :where [_ :likes ?value]]\n             db)\n          ; => #{[\"fries\"] [\"candy\"] [\"pie\"] [\"pizza\"]}\n          ```",(cljs.core.truth_(datascript.core.q)?datascript.core.q.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.listen_BANG_;},new cljs.core.Symbol("datascript.core","listen!","datascript.core/listen!",1659161258,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"listen!","listen!",-115577950,null),"datascript/core.cljc",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"callback","callback",935395299,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"callback","callback",935395299,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"callback","callback",935395299,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"callback","callback",935395299,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,592,592,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"callback","callback",935395299,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"callback","callback",935395299,null)], null)),"Listen for changes on the given connection. Whenever a transaction is applied to the database via [[transact!]], the callback is called\n   with the transaction report. `key` is any opaque unique value.\n   \n   Idempotent. Calling [[listen!]] with the same key twice will override old callback with the new value.\n   \n   Returns the key under which this listener is registered. See also [[unlisten!]].",(cljs.core.truth_(datascript.core.listen_BANG_)?datascript.core.listen_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.datom;},new cljs.core.Symbol("datascript.core","datom","datascript.core/datom",-1596234155,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"datom","datom",1268975437,null),"datascript/core.cljc",8,1,172,178,cljs.core.List.EMPTY,"Low-level fn to create raw datoms.\n\n             Optionally with transaction id (number) and `added` flag (`true` for addition, `false` for retraction).\n\n             See also [[init-db]].",(cljs.core.truth_(datascript.core.datom)?datascript.core.datom.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.db_with;},new cljs.core.Symbol("datascript.core","db-with","datascript.core/db-with",-1263574350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"db-with","db-with",233242042,null),"datascript/core.cljc",14,1,271,271,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null)], null)),"Applies transaction to an immutable db value, returning new immutable db value. Same as `(:db-after (with db tx-data))`.",(cljs.core.truth_(datascript.core.db_with)?datascript.core.db_with.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.index_range;},new cljs.core.Symbol("datascript.core","index-range","datascript.core/index-range",-1484576383,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"index-range","index-range",1044940937,null),"datascript/core.cljc",18,1,405,405,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null)),"Returns part of `:avet` index between `[_ attr start]` and `[_ attr end]` in AVET sort order.\n  \n   Same properties as [[datoms]].\n   \n   `attr` must be a reference, unique attribute or marked as `:db/index true`.\n   \n   Usage:\n\n       (index-range db :likes \"a\" \"zzzzzzzzz\")\n       ; => (#datascript/Datom [2 :likes \"candy\"]\n       ;     #datascript/Datom [1 :likes \"fries\"]\n       ;     #datascript/Datom [2 :likes \"pie\"]\n       ;     #datascript/Datom [1 :likes \"pizza\"]\n       ;     #datascript/Datom [2 :likes \"pizza\"])\n        \n       (index-range db :likes \"egg\" \"pineapple\")\n       ; => (#datascript/Datom [1 :likes \"fries\"]\n       ;     #datascript/Datom [2 :likes \"pie\"])\n           \n   Useful patterns:\n     \n       ; find all entities with age in a specific range (inclusive)\n       (->> (index-range db :age 18 60) (map :e))",(cljs.core.truth_(datascript.core.index_range)?datascript.core.index_range.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.conn_from_db;},new cljs.core.Symbol("datascript.core","conn-from-db","datascript.core/conn-from-db",1590561228,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"conn-from-db","conn-from-db",-184109372,null),"datascript/core.cljc",19,1,444,444,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),"Creates a mutable reference to a given immutable database. See [[create-conn]].",(cljs.core.truth_(datascript.core.conn_from_db)?datascript.core.conn_from_db.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.reset_conn_BANG_;},new cljs.core.Symbol("datascript.core","reset-conn!","datascript.core/reset-conn!",-458464444,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"reset-conn!","reset-conn!",1315177148,null),"datascript/core.cljc",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,570,570,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)),"Forces underlying `conn` value to become `db`. Will generate a tx-report that will remove everything from old value and insert everything from the new one.",(cljs.core.truth_(datascript.core.reset_conn_BANG_)?datascript.core.reset_conn_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.transact_BANG_;},new cljs.core.Symbol("datascript.core","transact!","datascript.core/transact!",1506351773,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"transact!","transact!",817805717,null),"datascript/core.cljc",16,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,476,476,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null)),"Applies transaction the underlying database value and atomically updates connection reference to point to the result of that transaction, new db value.\n  \n   Returns transaction report, a map:\n\n       { :db-before ...       ; db value before transaction\n         :db-after  ...       ; db value after transaction\n         :tx-data   [...]     ; plain datoms that were added/retracted from db-before\n         :tempids   {...}     ; map of tempid from tx-data => assigned entid in db-after\n         :tx-meta   tx-meta } ; the exact value you passed as `tx-meta`\n\n  Note! `conn` will be updated in-place and is not returned from [[transact!]].\n  \n  Usage:\n\n      ; add a single datom to an existing entity (1)\n      (transact! conn [[:db/add 1 :name \"Ivan\"]])\n  \n      ; retract a single datom\n      (transact! conn [[:db/retract 1 :name \"Ivan\"]])\n  \n      ; retract single entity attribute\n      (transact! conn [[:db.fn/retractAttribute 1 :name]])\n  \n      ; ... or equivalently (since Datomic changed its API to support this):\n      (transact! conn [[:db/retract 1 :name]])\n      \n      ; retract all entity attributes (effectively deletes entity)\n      (transact! conn [[:db.fn/retractEntity 1]])\n  \n      ; create a new entity (`-1`, as any other negative value, is a tempid\n      ; that will be replaced with DataScript to a next unused eid)\n      (transact! conn [[:db/add -1 :name \"Ivan\"]])\n  \n      ; check assigned id (here `*1` is a result returned from previous `transact!` call)\n      (def report *1)\n      (:tempids report) ; => {-1 296}\n  \n      ; check actual datoms inserted\n      (:tx-data report) ; => [#datascript/Datom [296 :name \"Ivan\"]]\n  \n      ; tempid can also be a string\n      (transact! conn [[:db/add \"ivan\" :name \"Ivan\"]])\n      (:tempids *1) ; => {\"ivan\" 297}\n  \n      ; reference another entity (must exist)\n      (transact! conn [[:db/add -1 :friend 296]])\n  \n      ; create an entity and set multiple attributes (in a single transaction\n      ; equal tempids will be replaced with the same yet unused entid)\n      (transact! conn [[:db/add -1 :name \"Ivan\"]\n                       [:db/add -1 :likes \"fries\"]\n                       [:db/add -1 :likes \"pizza\"]\n                       [:db/add -1 :friend 296]])\n  \n      ; create an entity and set multiple attributes (alternative map form)\n      (transact! conn [{:db/id  -1\n                        :name   \"Ivan\"\n                        :likes  [\"fries\" \"pizza\"]\n                        :friend 296}])\n      \n      ; update an entity (alternative map form). Can\u2019t retract attributes in\n      ; map form. For cardinality many attrs, value (fish in this example)\n      ; will be added to the list of existing values\n      (transact! conn [{:db/id  296\n                        :name   \"Oleg\"\n                        :likes  [\"fish\"]}])\n\n      ; ref attributes can be specified as nested map, that will create nested entity as well\n      (transact! conn [{:db/id  -1\n                        :name   \"Oleg\"\n                        :friend {:db/id -2\n                                 :name \"Sergey\"}}])\n                                 \n      ; reverse attribute name can be used if you want created entity to become\n      ; a value in another entity reference\n      (transact! conn [{:db/id  -1\n                        :name   \"Oleg\"\n                        :_friend 296}])\n      ; equivalent to\n      (transact! conn [{:db/id  -1, :name   \"Oleg\"}\n                       {:db/id 296, :friend -1}])\n      ; equivalent to\n      (transact! conn [[:db/add  -1 :name   \"Oleg\"]\n                       [:db/add 296 :friend -1]])",(cljs.core.truth_(datascript.core.transact_BANG_)?datascript.core.transact_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.squuid;},new cljs.core.Symbol("datascript.core","squuid","datascript.core/squuid",-408746813,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"squuid","squuid",-1898207797,null),"datascript/core.cljc",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msec","msec",-1372914914,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msec","msec",-1372914914,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,728,728,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msec","msec",-1372914914,null)], null)),"Generates a UUID that grow with time. Such UUIDs will always go to the end  of the index and that will minimize insertions in the middle.\n  \n   Consist of 64 bits of current UNIX timestamp (in seconds) and 64 random bits (2^64 different unique values per second).",(cljs.core.truth_(datascript.core.squuid)?datascript.core.squuid.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.db;},new cljs.core.Symbol("datascript.core","db","datascript.core/db",667170070,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),"datascript/core.cljc",9,1,654,654,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null)], null)),"Returns the underlying immutable database value from a connection.\n   \n   Exists for Datomic API compatibility. Prefer using `@conn` directly if possible.",(cljs.core.truth_(datascript.core.db)?datascript.core.db.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.serializable;},new cljs.core.Symbol("datascript.core","serializable","datascript.core/serializable",-630048076,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"serializable","serializable",1941609404,null),"datascript/core.cljc",15,1,195,207,cljs.core.List.EMPTY,"Converts db into a data structure (not string!) that can be fed to serializer\n             of your choice (e.g. `js/JSON.stringify` in CLJS, `cheshire.core/generate-string`\n             or `jsonista.core/write-value-as-string` in CLJ).\n\n             On JVM, `serializable` holds a global lock that prevents any two serializations\n             to run in parallel (an implementation constraint, be aware).\n\n             Options:\n\n             `:freeze-fn` Non-primitive values will be serialized using this. Optional.\n             `pr-str` by default.",(cljs.core.truth_(datascript.core.serializable)?datascript.core.serializable.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.conn_from_datoms;},new cljs.core.Symbol("datascript.core","conn-from-datoms","datascript.core/conn-from-datoms",253878827,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"conn-from-datoms","conn-from-datoms",-1502002909,null),"datascript/core.cljc",23,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,450,450,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)),"Creates an empty DB and a mutable reference to it. See [[create-conn]].",(cljs.core.truth_(datascript.core.conn_from_datoms)?datascript.core.conn_from_datoms.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.from_serializable;},new cljs.core.Symbol("datascript.core","from-serializable","datascript.core/from-serializable",-1560031101,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"from-serializable","from-serializable",945516427,null),"datascript/core.cljc",20,1,210,218,cljs.core.List.EMPTY,"Creates db from a data structure (not string!) produced by serializable.\n\n             Opts:\n\n             `:thaw-fn` Non-primitive values will be deserialized using this.\n             Must match :freeze-fn from serializable. Optional. `clojure.edn/read-string`\n             by default.",(cljs.core.truth_(datascript.core.from_serializable)?datascript.core.from_serializable.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.empty_db;},new cljs.core.Symbol("datascript.core","empty-db","datascript.core/empty-db",-807971396,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"empty-db","empty-db",1486862004,null),"datascript/core.cljc",11,1,152,164,cljs.core.List.EMPTY,"Creates an empty database with an optional schema.\n\n             Usage:\n             \n             ```\n             (empty-db) ; => #datascript/DB {:schema {}, :datoms []}\n  \n             (empty-db {:likes {:db/cardinality :db.cardinality/many}})\n             ; => #datascript/DB {:schema {:likes {:db/cardinality :db.cardinality/many}}\n             ;                    :datoms []}\n             ```",(cljs.core.truth_(datascript.core.empty_db)?datascript.core.empty_db.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.init_db;},new cljs.core.Symbol("datascript.core","init-db","datascript.core/init-db",1493526573,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"init-db","init-db",-1059254491,null),"datascript/core.cljc",10,1,186,192,cljs.core.List.EMPTY,"Low-level fn for creating database quickly from a trusted sequence of datoms.\n\n             Does no validation on inputs, so `datoms` must be well-formed and match schema.\n\n             Used internally in db (de)serialization. See also [[datom]].",(cljs.core.truth_(datascript.core.init_db)?datascript.core.init_db.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.touch;},new cljs.core.Symbol("datascript.core","touch","datascript.core/touch",632058772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"touch","touch",-1158163300,null),"datascript/core.cljc",8,1,91,100,cljs.core.List.EMPTY,"Forces all entity attributes to be eagerly fetched and cached. Only usable for debug output.\n\n             Usage:\n\n             ```\n             (entity db 1) ; => {:db/id 1}\n             (touch (entity db 1)) ; => {:db/id 1, :dislikes [:pie], :likes [:pizza]}\n             ```",(cljs.core.truth_(datascript.core.touch)?datascript.core.touch.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.tx0;},new cljs.core.Symbol("datascript.core","tx0","datascript.core/tx0",1432817831,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"tx0","tx0",-4656209,null),"datascript/core.cljc",26,1,true,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(datascript.core.tx0)?datascript.core.tx0.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.filter;},new cljs.core.Symbol("datascript.core","filter","datascript.core/filter",-1276765471,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"filter","filter",691993593,null),"datascript/core.cljc",13,1,235,235,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null)),"Returns a view over database that has same interface but only includes datoms for which the `(pred db datom)` is true. Can be applied multiple times.\n   \n   Filtered DB gotchas:\n\n   - All operations on filtered database are proxied to original DB, then filter pred is applied.\n   - Not cached. You pay filter penalty every time.\n   - Supports entities, pull, queries, index access.\n   - Does not support [[with]] and [[db-with]].",(cljs.core.truth_(datascript.core.filter)?datascript.core.filter.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.datoms;},new cljs.core.Symbol("datascript.core","datoms","datascript.core/datoms",961250077,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),"datascript/core.cljc",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),6,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),6,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null,null)], null),1,280,280,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null),new cljs.core.Symbol(null,"c2","c2",78651156,null),new cljs.core.Symbol(null,"c3","c3",468715789,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)], null)),"Index lookup. Returns a sequence of datoms (lazy iterator over actual DB index) which components (e, a, v) match passed arguments.\n\n   Datoms are sorted in index sort order. Possible `index` values are: `:eavt`, `:aevt`, `:avet`.\n\n   Usage:\n\n       ; find all datoms for entity id == 1 (any attrs and values)\n       ; sort by attribute, then value\n       (datoms db :eavt 1)\n       ; => (#datascript/Datom [1 :friends 2]\n       ;     #datascript/Datom [1 :likes \"fries\"]\n       ;     #datascript/Datom [1 :likes \"pizza\"]\n       ;     #datascript/Datom [1 :name \"Ivan\"])\n  \n       ; find all datoms for entity id == 1 and attribute == :likes (any values)\n       ; sorted by value\n       (datoms db :eavt 1 :likes)\n       ; => (#datascript/Datom [1 :likes \"fries\"]\n       ;     #datascript/Datom [1 :likes \"pizza\"])\n       \n       ; find all datoms for entity id == 1, attribute == :likes and value == \"pizza\"\n       (datoms db :eavt 1 :likes \"pizza\")\n       ; => (#datascript/Datom [1 :likes \"pizza\"])\n  \n       ; find all datoms for attribute == :likes (any entity ids and values)\n       ; sorted by entity id, then value\n       (datoms db :aevt :likes)\n       ; => (#datascript/Datom [1 :likes \"fries\"]\n       ;     #datascript/Datom [1 :likes \"pizza\"]\n       ;     #datascript/Datom [2 :likes \"candy\"]\n       ;     #datascript/Datom [2 :likes \"pie\"]\n       ;     #datascript/Datom [2 :likes \"pizza\"])\n  \n       ; find all datoms that have attribute == `:likes` and value == `\"pizza\"` (any entity id)\n       ; `:likes` must be a unique attr, reference or marked as `:db/index true`\n       (datoms db :avet :likes \"pizza\")\n       ; => (#datascript/Datom [1 :likes \"pizza\"]\n       ;     #datascript/Datom [2 :likes \"pizza\"])\n  \n       ; find all datoms sorted by entity id, then attribute, then value\n       (datoms db :eavt) ; => (...)\n\n   Useful patterns:\n\n       ; get all values of :db.cardinality/many attribute\n       (->> (datoms db :eavt eid attr) (map :v))\n  \n       ; lookup entity ids by attribute value\n       (->> (datoms db :avet attr value) (map :e))\n  \n       ; find all entities with a specific attribute\n       (->> (datoms db :aevt attr) (map :e))\n  \n       ; find \u201Csingleton\u201D entity by its attr\n       (->> (datoms db :aevt attr) first :e)\n  \n       ; find N entities with lowest attr value (e.g. 10 earliest posts)\n       (->> (datoms db :avet attr) (take N))\n  \n       ; find N entities with highest attr value (e.g. 10 latest posts)\n       (->> (datoms db :avet attr) (reverse) (take N))\n\n   Gotchas:\n   \n   - Index lookup is usually more efficient than doing a query with a single clause.\n   - Resulting iterator is calculated in constant time and small constant memory overhead.\n   - Iterator supports efficient `first`, `next`, `reverse`, `seq` and is itself a sequence.\n   - Will not return datoms that are not part of the index (e.g. attributes with no `:db/index` in schema when querying `:avet` index).\n     - `:eavt` and `:aevt` contain all datoms.\n     - `:avet` only contains datoms for references, `:db/unique` and `:db/index` attributes.",(cljs.core.truth_(datascript.core.datoms)?datascript.core.datoms.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.pull;},new cljs.core.Symbol("datascript.core","pull","datascript.core/pull",-1213970902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"pull","pull",779986722,null),"datascript/core.cljc",7,1,105,117,cljs.core.List.EMPTY,"Fetches data from database using recursive declarative description. See [docs.datomic.com/on-prem/pull.html](https://docs.datomic.com/on-prem/pull.html).\n\n             Unlike [[entity]], returns plain Clojure map (not lazy).\n\n             Usage:\n\n                 (pull db [:db/id, :name, :likes, {:friends [:db/id :name]}] 1)\n                 ; => {:db/id   1,\n                 ;     :name    \"Ivan\"\n                 ;     :likes   [:pizza]\n                 ;     :friends [{:db/id 2, :name \"Oleg\"}]}",(cljs.core.truth_(datascript.core.pull)?datascript.core.pull.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.core_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.core.create_conn;},new cljs.core.Symbol("datascript.core","create-conn","datascript.core/create-conn",-768042587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),new cljs.core.Symbol(null,"create-conn","create-conn",2071410861,null),"datascript/core.cljc",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,456,456,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null)),"Creates a mutable reference (a \u201Cconnection\u201D) to an empty immutable database.\n\n   Connections are lightweight in-memory structures (~atoms) with direct support of transaction listeners ([[listen!]], [[unlisten!]]) and other handy DataScript APIs ([[transact!]], [[reset-conn!]], [[db]]).\n\n   To access underlying immutable DB value, deref: `@conn`.",(cljs.core.truth_(datascript.core.create_conn)?datascript.core.create_conn.cljs$lang$test:null)]));
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
})()]);
sci.configs.tonsky.datascript.db_namespace = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"db-from-reader","db-from-reader",1527469533,null),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.db_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.db.db_from_reader;},new cljs.core.Symbol("datascript.db","db-from-reader","datascript.db/db-from-reader",266573302,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Symbol(null,"db-from-reader","db-from-reader",1527469533,null),"datascript/db.cljc",21,1,885,885,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null)], null)], null)),null,(cljs.core.truth_(datascript.db.db_from_reader)?datascript.db.db_from_reader.cljs$lang$test:null)]));
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
})(),new cljs.core.Symbol(null,"datom-from-reader","datom-from-reader",1334075127,null),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.db_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.db.datom_from_reader;},new cljs.core.Symbol("datascript.db","datom-from-reader","datascript.db/datom-from-reader",2070683374,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Symbol(null,"datom-from-reader","datom-from-reader",1334075127,null),"datascript/db.cljc",31,1,297,297,new cljs.core.Symbol(null,"Datom","Datom",1208901035,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null)], null)),null,(cljs.core.truth_(datascript.db.datom_from_reader)?datascript.db.datom_from_reader.cljs$lang$test:null)]));
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
})(),new cljs.core.Symbol(null,"datom-added","datom-added",-363961980,null),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.db_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.db.datom_added;},new cljs.core.Symbol("datascript.db","datom-added","datascript.db/datom-added",-560586371,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("datascript.db","IDatom","datascript.db/IDatom",293960966,null),new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Symbol(null,"datom-added","datom-added",-363961980,null),"datascript/db.cljc",15,1,154,156,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)),null,(cljs.core.truth_(datascript.db.datom_added)?datascript.db.datom_added.cljs$lang$test:null)]));
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
})(),new cljs.core.Symbol(null,"datom-tx","datom-tx",1349109608,null),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.db_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.db.datom_tx;},new cljs.core.Symbol("datascript.db","datom-tx","datascript.db/datom-tx",2084964209,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("datascript.db","IDatom","datascript.db/IDatom",293960966,null),new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Symbol(null,"datom-tx","datom-tx",1349109608,null),"datascript/db.cljc",12,1,154,155,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)),null,(cljs.core.truth_(datascript.db.datom_tx)?datascript.db.datom_tx.cljs$lang$test:null)]));
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
})(),new cljs.core.Symbol(null,"datom","datom",1268975437,null),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.db_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.db.datom;},new cljs.core.Symbol("datascript.db","datom","datascript.db/datom",399198004,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Symbol(null,"datom","datom",1268975437,null),"datascript/db.cljc",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),5,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),5,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,233,233,new cljs.core.Symbol(null,"Datom","Datom",1208901035,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null)),null,(cljs.core.truth_(datascript.db.datom)?datascript.db.datom.cljs$lang$test:null)]));
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
})(),new cljs.core.Symbol(null,"DB","DB",1622874957,null),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.db_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.db.DB;},new cljs.core.Symbol("datascript.db","DB","datascript.db/DB",348347258,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"datascript/db.cljc",new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"column","column",2078222095),22,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"DB","DB",1622874957,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(datascript.db.DB)?datascript.db.DB.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));
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
})(),new cljs.core.Symbol(null,"Datom","Datom",1208901035,null),(function (){var ns__46341__auto__ = sci.configs.tonsky.datascript.db_ns;
var var__46342__auto__ = new cljs.core.Var(function(){return datascript.db.Datom;},new cljs.core.Symbol("datascript.db","Datom","datascript.db/Datom",1951800754,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"datascript/db.cljc",new cljs.core.Keyword(null,"line","line",212345235),160,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"Datom","Datom",1208901035,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(datascript.db.Datom)?datascript.db.Datom.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));
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
sci.configs.tonsky.datascript.namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"datascript.core","datascript.core",-1034255346,null),sci.configs.tonsky.datascript.core_namespace,new cljs.core.Symbol(null,"datascript.db","datascript.db",-444456104,null),sci.configs.tonsky.datascript.db_namespace], null);
sci.configs.tonsky.datascript.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),sci.configs.tonsky.datascript.namespaces], null);

//# sourceMappingURL=sci.configs.tonsky.datascript.js.map
