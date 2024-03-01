goog.provide('sci.configs.reagent.reagent');
sci.configs.reagent.reagent.with_let = (function sci$configs$reagent$reagent$with_let(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49338 = arguments.length;
var i__5770__auto___49339 = (0);
while(true){
if((i__5770__auto___49339 < len__5769__auto___49338)){
args__5775__auto__.push((arguments[i__5770__auto___49339]));

var G__49340 = (i__5770__auto___49339 + (1));
i__5770__auto___49339 = G__49340;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.reagent.reagent.with_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.reagent.reagent.with_let.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ",["with-let bindings must be a vector, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings], 0))].join(''),"\n","(vector? bindings)"].join('')));
}

var v = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("with-let");
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
var init = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("init");
var bs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)))))], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.even_QMARK_(i)){
return x;
} else {
var j = cljs.core.quot(i,(2));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,init,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".hasOwnProperty",".hasOwnProperty",-1264659034,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0)))),null,(1),null))], 0))));
}
}),bindings));
var vec__49245 = (function (){var fin = cljs.core.last(body);
if(((cljs.core.seq_QMARK_(fin)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(fin))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(body),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(fin)], 0))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body,null], null);
}
})();
var forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49245,(0),null);
var destroy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49245,(1),null);
var add_destroy = (cljs.core.truth_(destroy)?(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"destroy__49228__auto__","destroy__49228__auto__",-2147235365,null),null,(1),null)),(new cljs.core.List(null,destroy,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","reactive?","reagent.ratom/reactive?",-358553475,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","-destroy","reagent.ratom/-destroy",-1284026419,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","-destroy!","reagent.ratom/-destroy!",-337873850,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"destroy__49228__auto__","destroy__49228__auto__",-2147235365,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"destroy__49228__auto__","destroy__49228__auto__",-2147235365,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)):null);
var asserting = true;
var res = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","with-let-values","reagent.ratom/with-let-values",-575838306,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((asserting)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-some","cljs.core/when-some",1033431610,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"c__49231__auto__","c__49231__auto__",169796527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","-ratom-context","reagent.ratom/-ratom-context",211702371,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","-generation","reagent.ratom/-generation",-2110596004,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","-ratom-generation","reagent.ratom/-ratom-generation",281140079,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__49231__auto__","c__49231__auto__",169796527,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","error","reagent.debug/error",-1186466282,null),null,(1),null)),(new cljs.core.List(null,"Warning: The same with-let is being used more ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"than once in the same reactive context.",null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","-set-ratom-generation!","reagent.ratom/-set-ratom-generation!",-963803973,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c__49231__auto__","c__49231__auto__",169796527,null),null,(1),null))], 0)))),null,(1),null))], 0)))):null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(bs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms)))], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([add_destroy,(new cljs.core.List(null,res,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.configs.reagent.reagent.with_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.reagent.reagent.with_let.cljs$lang$applyTo = (function (seq49234){
var G__49236 = cljs.core.first(seq49234);
var seq49234__$1 = cljs.core.next(seq49234);
var G__49237 = cljs.core.first(seq49234__$1);
var seq49234__$2 = cljs.core.next(seq49234__$1);
var G__49238 = cljs.core.first(seq49234__$2);
var seq49234__$3 = cljs.core.next(seq49234__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49236,G__49237,G__49238,seq49234__$3);
}));

sci.configs.reagent.reagent.reaction = (function sci$configs$reagent$reagent$reaction(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49341 = arguments.length;
var i__5770__auto___49342 = (0);
while(true){
if((i__5770__auto___49342 < len__5769__auto___49341)){
args__5775__auto__.push((arguments[i__5770__auto___49342]));

var G__49343 = (i__5770__auto___49342 + (1));
i__5770__auto___49342 = G__49343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.configs.reagent.reagent.reaction.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.configs.reagent.reagent.reaction.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",272608527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}));

(sci.configs.reagent.reagent.reaction.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.configs.reagent.reagent.reaction.cljs$lang$applyTo = (function (seq49261){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49261));
}));

sci.configs.reagent.reagent.rns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),null);
sci.configs.reagent.reagent.reagent_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"create-class","create-class",-665911586,null),new cljs.core.Symbol(null,"track","track",1836319014,null),new cljs.core.Symbol(null,"with-let","with-let",-1310113408,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"class-names","class-names",-1397320704,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"as-element","as-element",-2139409597,null),new cljs.core.Symbol(null,"reactify-component","reactify-component",-882526483,null),new cljs.core.Symbol(null,"create-element","create-element",1833774591,null),new cljs.core.Symbol(null,"dispose!","dispose!",-395693497,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"track!","track!",-516308489,null),new cljs.core.Symbol(null,"create-compiler","create-compiler",1059333141,null),new cljs.core.Symbol(null,"adapt-react-class","adapt-react-class",1221068673,null)],[(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.create_class;},new cljs.core.Symbol("reagent.core","create-class","reagent.core/create-class",-1100017147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"create-class","create-class",-665911586,null),"reagent/core.cljs",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,68,68,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)),"Creates JS class based on provided Clojure map, for example:\n\n  ```cljs\n  {;; Constructor\n   :constructor (fn [this props])\n   :get-initial-state (fn [this])\n   ;; Static methods\n   :get-derived-state-from-props (fn [props state] partial-state)\n   :get-derived-state-from-error (fn [error] partial-state)\n   ;; Methods\n   :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)\n   :should-component-update (fn [this old-argv new-argv])\n   :component-did-mount (fn [this])\n   :component-did-update (fn [this old-argv old-state snapshot])\n   :component-will-unmount (fn [this])\n   :component-did-catch (fn [this error info])\n   :reagent-render (fn [args....])\n   ;; Or alternatively:\n   :render (fn [this])\n   ;; Deprecated methods:\n   :UNSAFE_component-will-receive-props (fn [this new-argv])\n   :UNSAFE_component-will-update (fn [this new-argv new-state])\n   :UNSAFE_component-will-mount (fn [this])}\n  ```\n\n  Everything is optional, except either :reagent-render or :render.\n\n  Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),\n  and can be provided in snake-case or camelCase.\n\n  State can be initialized using constructor, which matches React.Component class,\n  or using getInitialState which matches old React createClass function and is\n  now implemented by Reagent for compatibility.\n\n  State can usually be anything, e.g. Cljs object. But if using getDerivedState\n  methods, the state has to be plain JS object as React implementation uses\n  Object.assign to merge partial state into the current state.\n\n  React built-in static methods or properties are automatically defined as statics.",(cljs.core.truth_(reagent.core.create_class)?reagent.core.create_class.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.track;},new cljs.core.Symbol("reagent.core","track","reagent.core/track",1263921785,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"track","track",1836319014,null),"reagent/core.cljs",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,218,218,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"Takes a function and optional arguments, and returns a derefable\n  containing the output of that function. If the function derefs\n  Reagent atoms (or track, etc), the value will be updated whenever\n  the atom changes.\n\n  In other words, `@(track foo bar)` will produce the same result\n  as `(foo bar)`, but foo will only be called again when the atoms it\n  depends on changes, and will only trigger updates of components when\n  its result changes.\n\n  track is lazy, i.e the function is only evaluated on deref.",(cljs.core.truth_(reagent.core.track)?reagent.core.track.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent.with_let;},new cljs.core.Symbol("sci.configs.reagent.reagent","with-let","sci.configs.reagent.reagent/with-let",65759084,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"with-let","with-let",-1310113408,null),"sci/configs/reagent/reagent.cljs",23,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,10,true,10,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),null,(cljs.core.truth_(sci.configs.reagent.reagent.with_let)?sci.configs.reagent.reagent.with_let.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.atom;},new cljs.core.Symbol("reagent.core","atom","reagent.core/atom",1748890217,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null),"reagent/core.cljs",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"rest","rest",398835108,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,211,211,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"rest","rest",398835108,null)], null)),"Like clojure.core/atom, except that it keeps track of derefs.\n  Reagent components that derefs one of these are automatically\n  re-rendered.",(cljs.core.truth_(reagent.core.atom)?reagent.core.atom.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.class_names;},new cljs.core.Symbol("reagent.core","class-names","reagent.core/class-names",-1902681251,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"class-names","class-names",-1397320704,null),"reagent/core.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",-390430469,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class1","class1",-1905977651,null),new cljs.core.Symbol(null,"class2","class2",-1266396392,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",-390430469,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class1","class1",-1905977651,null),new cljs.core.Symbol(null,"class2","class2",-1266396392,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class1","class1",-1905977651,null),new cljs.core.Symbol(null,"class2","class2",-1266396392,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"others","others",-569561186,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),1,179,179,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",-390430469,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class1","class1",-1905977651,null),new cljs.core.Symbol(null,"class2","class2",-1266396392,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class1","class1",-1905977651,null),new cljs.core.Symbol(null,"class2","class2",-1266396392,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"others","others",-569561186,null)], null)),"Function which normalizes and combines class values to a string\n\n  Reagent allows classes to be defined as:\n  - Strings\n  - Named objects (Symbols or Keywords)\n  - Collections of previous types",(cljs.core.truth_(reagent.core.class_names)?reagent.core.class_names.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent.reaction;},new cljs.core.Symbol("sci.configs.reagent.reagent","reaction","sci.configs.reagent.reagent/reaction",-1324858361,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),"sci/configs/reagent/reagent.cljs",23,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(-2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(-2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.List.EMPTY),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,62,true,62,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sci.configs.reagent.reagent.reaction)?sci.configs.reagent.reagent.reaction.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.as_element;},new cljs.core.Symbol("reagent.core","as-element","reagent.core/as-element",-1369748434,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"as-element","as-element",-2139409597,null),"reagent/core.cljs",17,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,46,46,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)),"Turns a vector of Hiccup syntax into a React element. Returns form\n  unchanged if it is not a vector.",(cljs.core.truth_(reagent.core.as_element)?reagent.core.as_element.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.reactify_component;},new cljs.core.Symbol("reagent.core","reactify-component","reagent.core/reactify-component",-385504376,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"reactify-component","reactify-component",-882526483,null),"reagent/core.cljs",25,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,59,59,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null)], null)),"Returns an adapter for a Reagent component, that may be used from\n  React, for example in JSX. A single argument, props, is passed to\n  the component, converted to a map.",(cljs.core.truth_(reagent.core.reactify_component)?reagent.core.reactify_component.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.create_element;},new cljs.core.Symbol("reagent.core","create-element","reagent.core/create-element",-1888667366,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"create-element","create-element",1833774591,null),"reagent/core.cljs",21,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"child","child",-2030468224,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"child","child",-2030468224,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),1,17,17,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"child","child",-2030468224,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null)),"Create a native React element, by calling React.createElement directly.\n\n  That means the second argument must be a javascript object (or nil), and\n  that any Reagent hiccup forms must be processed with as-element. For example\n  like this:\n\n  ```cljs\n  (r/create-element \"div\" #js{:className \"foo\"}\n    \"Hi \" (r/as-element [:strong \"world!\"])\n  ```\n\n  which is equivalent to\n\n  ```cljs\n  [:div.foo \"Hi\" [:strong \"world!\"]]\n  ```",(cljs.core.truth_(reagent.core.create_element)?reagent.core.create_element.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.dispose_BANG_;},new cljs.core.Symbol("reagent.core","dispose!","reagent.core/dispose!",239740642,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"dispose!","dispose!",-395693497,null),"reagent/core.cljs",15,1,242,242,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Stop the result of track! from updating.",(cljs.core.truth_(reagent.core.dispose_BANG_)?reagent.core.dispose_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.cursor;},new cljs.core.Symbol("reagent.core","cursor","reagent.core/cursor",-1137097804,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),"reagent/core.cljs",13,1,272,272,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null)),"Provide a cursor into a Reagent atom.\n\n  Behaves like a Reagent atom but focuses updates and derefs to\n  the specified path within the wrapped Reagent atom. e.g.,\n\n  ```cljs\n  (let [c (cursor ra [:nested :content])]\n    ... @c ;; equivalent to (get-in @ra [:nested :content])\n    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)\n    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)\n    )\n  ```\n\n  The first parameter can also be a function, that should look\n  something like this:\n\n  ```cljs\n  (defn set-get\n    ([k] (get-in @state k))\n    ([k v] (swap! state assoc-in k v)))\n  ```\n\n  The function will be called with one argument \u2013 the path passed to\n  cursor \u2013 when the cursor is deref'ed, and two arguments (path and\n  new value) when the cursor is modified.\n\n  Given that set-get function, (and that state is a Reagent atom, or\n  another cursor) these cursors are equivalent:\n  `(cursor state [:foo])` and `(cursor set-get [:foo])`.\n\n  Note that a cursor is lazy: its value will not change until it is\n  used. This may be noticed with add-watch.",(cljs.core.truth_(reagent.core.cursor)?reagent.core.cursor.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.track_BANG_;},new cljs.core.Symbol("reagent.core","track!","reagent.core/track!",-954652078,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"track!","track!",-516308489,null),"reagent/core.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,234,234,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"An eager version of track. The function passed is called\n  immediately, and continues to be called when needed, until stopped\n  with dispose!.",(cljs.core.truth_(reagent.core.track_BANG_)?reagent.core.track_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.create_compiler;},new cljs.core.Symbol("reagent.core","create-compiler","reagent.core/create-compiler",491047088,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"create-compiler","create-compiler",1059333141,null),"reagent/core.cljs",22,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),"Creates Compiler object with given `opts`,\n  this can be passed to `render`, `as-element` and other functions to control\n  how they turn the Reagent-style Hiccup into React components and elements.",(cljs.core.truth_(reagent.core.create_compiler)?reagent.core.create_compiler.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.core.adapt_react_class;},new cljs.core.Symbol("reagent.core","adapt-react-class","reagent.core/adapt-react-class",1789410154,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"adapt-react-class","adapt-react-class",1221068673,null),"reagent/core.cljs",24,1,52,52,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null)),"Returns an adapter for a native React class, that may be used\n  just like a Reagent component function or class in Hiccup forms.",(cljs.core.truth_(reagent.core.adapt_react_class)?reagent.core.adapt_react_class.cljs$lang$test:null)]));
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
sci.configs.reagent.reagent.rtmns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),null);
/**
 * Read-only access to the ratom context.
 */
sci.configs.reagent.reagent._ratom_context = (function sci$configs$reagent$reagent$_ratom_context(){
return reagent.ratom._STAR_ratom_context_STAR_;
});
sci.configs.reagent.reagent._generation = (function sci$configs$reagent$reagent$_generation(x){
return x.generation;
});
sci.configs.reagent.reagent._ratom_generation = (function sci$configs$reagent$reagent$_ratom_generation(x){
return x.ratomGeneration;
});
sci.configs.reagent.reagent._set_ratom_generation_BANG_ = (function sci$configs$reagent$reagent$_set_ratom_generation_BANG_(v,c){
return (v.generation = c.ratomGeneration);
});
sci.configs.reagent.reagent._destroy_BANG_ = (function sci$configs$reagent$reagent$_destroy_BANG_(v,destroy){
return (v.destroy = destroy);
});
sci.configs.reagent.reagent._destroy = (function sci$configs$reagent$reagent$_destroy(v){
return v.destroy;
});
sci.configs.reagent.reagent.reagent_ratom_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"with-let-values","with-let-values",1929572375,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"make-track","make-track",-1388299455,null),new cljs.core.Symbol(null,"-destroy","-destroy",-557272508,null),new cljs.core.Symbol(null,"-set-ratom-generation!","-set-ratom-generation!",-1545989828,null),new cljs.core.Symbol(null,"reactive?","reactive?",1213887990,null),new cljs.core.Symbol(null,"-destroy!","-destroy!",143253949,null),new cljs.core.Symbol(null,"make-reaction","make-reaction",1935680112,null),new cljs.core.Symbol(null,"-ratom-context","-ratom-context",1646839514,null),new cljs.core.Symbol(null,"-generation","-generation",627658965,null),new cljs.core.Symbol(null,"track!","track!",-516308489,null),new cljs.core.Symbol(null,"-ratom-generation","-ratom-generation",-176468250,null)],[(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.ratom.with_let_values;},new cljs.core.Symbol("reagent.ratom","with-let-values","reagent.ratom/with-let-values",-575838306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),new cljs.core.Symbol(null,"with-let-values","with-let-values",1929572375,null),"reagent/ratom.cljs",22,1,329,329,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null)),null,(cljs.core.truth_(reagent.ratom.with_let_values)?reagent.ratom.with_let_values.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.ratom.atom;},new cljs.core.Symbol("reagent.ratom","atom","reagent.ratom/atom",-391081187,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null),"reagent/ratom.cljs",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,172,172,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null)], null)], null)),"Like clojure.core/atom, except that it keeps track of derefs.",(cljs.core.truth_(reagent.ratom.atom)?reagent.ratom.atom.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.ratom.make_track;},new cljs.core.Symbol("reagent.ratom","make-track","reagent.ratom/make-track",267038680,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),new cljs.core.Symbol(null,"make-track","make-track",-1388299455,null),"reagent/ratom.cljs",17,1,228,228,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(reagent.ratom.make_track)?reagent.ratom.make_track.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent._destroy;},new cljs.core.Symbol("sci.configs.reagent.reagent","-destroy","sci.configs.reagent.reagent/-destroy",-1999711192,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"-destroy","-destroy",-557272508,null),"sci/configs/reagent/reagent.cljs",15,1,106,106,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),null,(cljs.core.truth_(sci.configs.reagent.reagent._destroy)?sci.configs.reagent.reagent._destroy.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent._set_ratom_generation_BANG_;},new cljs.core.Symbol("sci.configs.reagent.reagent","-set-ratom-generation!","sci.configs.reagent.reagent/-set-ratom-generation!",-35374248,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"-set-ratom-generation!","-set-ratom-generation!",-1545989828,null),"sci/configs/reagent/reagent.cljs",29,1,98,98,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null)),null,(cljs.core.truth_(sci.configs.reagent.reagent._set_ratom_generation_BANG_)?sci.configs.reagent.reagent._set_ratom_generation_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.ratom.reactive_QMARK_;},new cljs.core.Symbol("reagent.ratom","reactive?","reagent.ratom/reactive?",-358553475,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),new cljs.core.Symbol(null,"reactive?","reactive?",1213887990,null),"reagent/ratom.cljs",25,1,17,17,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,((reagent.ratom.reactive_QMARK_)?reagent.ratom.reactive_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent._destroy_BANG_;},new cljs.core.Symbol("sci.configs.reagent.reagent","-destroy!","sci.configs.reagent.reagent/-destroy!",-561262631,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"-destroy!","-destroy!",143253949,null),"sci/configs/reagent/reagent.cljs",16,1,102,102,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"destroy","destroy",796871122,null)], null)),null,(cljs.core.truth_(sci.configs.reagent.reagent._destroy_BANG_)?sci.configs.reagent.reagent._destroy_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.ratom.make_reaction;},new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",272608527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),new cljs.core.Symbol(null,"make-reaction","make-reaction",1935680112,null),"reagent/ratom.cljs",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,517,517,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null)], null)], null)),null,(cljs.core.truth_(reagent.ratom.make_reaction)?reagent.ratom.make_reaction.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent._ratom_context;},new cljs.core.Symbol("sci.configs.reagent.reagent","-ratom-context","sci.configs.reagent.reagent/-ratom-context",270989566,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"-ratom-context","-ratom-context",1646839514,null),"sci/configs/reagent/reagent.cljs",21,1,85,85,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Read-only access to the ratom context.",(cljs.core.truth_(sci.configs.reagent.reagent._ratom_context)?sci.configs.reagent.reagent._ratom_context.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent._generation;},new cljs.core.Symbol("sci.configs.reagent.reagent","-generation","sci.configs.reagent.reagent/-generation",-1754580423,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"-generation","-generation",627658965,null),"sci/configs/reagent/reagent.cljs",18,1,90,90,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null)),null,(cljs.core.truth_(sci.configs.reagent.reagent._generation)?sci.configs.reagent.reagent._generation.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.ratom.track_BANG_;},new cljs.core.Symbol("reagent.ratom","track!","reagent.ratom/track!",1183599982,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),new cljs.core.Symbol(null,"track!","track!",-516308489,null),"reagent/ratom.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,242,242,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(reagent.ratom.track_BANG_)?reagent.ratom.track_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rtmns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent._ratom_generation;},new cljs.core.Symbol("sci.configs.reagent.reagent","-ratom-generation","sci.configs.reagent.reagent/-ratom-generation",662254794,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"-ratom-generation","-ratom-generation",-176468250,null),"sci/configs/reagent/reagent.cljs",24,1,94,94,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null)),null,(cljs.core.truth_(sci.configs.reagent.reagent._ratom_generation)?sci.configs.reagent.reagent._ratom_generation.cljs$lang$test:null)]));
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
sci.configs.reagent.reagent.rdbgns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"reagent.debug","reagent.debug",1010511129,null),null);
sci.configs.reagent.reagent._tracking_QMARK_ = (function sci$configs$reagent$reagent$_tracking_QMARK_(){
return reagent.debug.tracking;
});
/**
 * Print with console.error.
 */
sci.configs.reagent.reagent.error = (function sci$configs$reagent$reagent$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49464 = arguments.length;
var i__5770__auto___49465 = (0);
while(true){
if((i__5770__auto___49465 < len__5769__auto___49464)){
args__5775__auto__.push((arguments[i__5770__auto___49465]));

var G__49466 = (i__5770__auto___49465 + (1));
i__5770__auto___49465 = G__49466;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.configs.reagent.reagent.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.configs.reagent.reagent.error.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".error",".error",1756007195,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","-tracking?","reagent.debug/-tracking?",409956583,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","track-console","reagent.debug/track-console",-1553126476,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),forms))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return null;
}
}));

(sci.configs.reagent.reagent.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.reagent.reagent.error.cljs$lang$applyTo = (function (seq49327){
var G__49328 = cljs.core.first(seq49327);
var seq49327__$1 = cljs.core.next(seq49327);
var G__49329 = cljs.core.first(seq49327__$1);
var seq49327__$2 = cljs.core.next(seq49327__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49328,G__49329,seq49327__$2);
}));

sci.configs.reagent.reagent.reagent_debug_namespace = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"error","error",661562495,null),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rdbgns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent.error;},new cljs.core.Symbol("sci.configs.reagent.reagent","error","sci.configs.reagent.reagent/error",1433174531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"error","error",661562495,null),"sci/configs/reagent/reagent.cljs",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"forms","forms",-608443419,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,132,true,132,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Print with console.error.",(cljs.core.truth_(sci.configs.reagent.reagent.error)?sci.configs.reagent.reagent.error.cljs$lang$test:null)]));
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
})(),new cljs.core.Symbol(null,"-tracking?","-tracking?",-1106885352,null),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rdbgns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.reagent.reagent._tracking_QMARK_;},new cljs.core.Symbol("sci.configs.reagent.reagent","-tracking?","sci.configs.reagent.reagent/-tracking?",201600244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.reagent.reagent","sci.configs.reagent.reagent",94604865,null),new cljs.core.Symbol(null,"-tracking?","-tracking?",-1106885352,null),"sci/configs/reagent/reagent.cljs",17,1,129,129,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sci.configs.reagent.reagent._tracking_QMARK_)?sci.configs.reagent.reagent._tracking_QMARK_.cljs$lang$test:null)]));
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
})(),new cljs.core.Symbol(null,"track-console","track-console",17070495,null),(function (){var ns__46341__auto__ = sci.configs.reagent.reagent.rdbgns;
var var__46342__auto__ = new cljs.core.Var(function(){return reagent.debug.track_console;},new cljs.core.Symbol("reagent.debug","track-console","reagent.debug/track-console",-1553126476,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent.debug","reagent.debug",1010511129,null),new cljs.core.Symbol(null,"track-console","track-console",17070495,null),"reagent/debug.cljs",23,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.debug.track_console)?reagent.debug.track_console.cljs$lang$test:null)]));
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
sci.configs.reagent.reagent.namespaces = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),sci.configs.reagent.reagent.reagent_namespace,new cljs.core.Symbol(null,"reagent.ratom","reagent.ratom",-2036346616,null),sci.configs.reagent.reagent.reagent_ratom_namespace,new cljs.core.Symbol(null,"reagent.debug","reagent.debug",1010511129,null),sci.configs.reagent.reagent.reagent_debug_namespace], null);
sci.configs.reagent.reagent.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),sci.configs.reagent.reagent.namespaces], null);

//# sourceMappingURL=sci.configs.reagent.reagent.js.map
