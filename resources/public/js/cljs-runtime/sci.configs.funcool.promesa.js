goog.provide('sci.configs.funcool.promesa');
sci.configs.funcool.promesa.pns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),null);
sci.configs.funcool.promesa.ptns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"promesa.protocols","promesa.protocols",-132625180,null),null);
/**
 * Execute potentially side effectful code and return a promise resolved
 *   to the last expression. Always awaiting the result of each
 *   expression.
 */
sci.configs.funcool.promesa.do_BANG_ = (function sci$configs$funcool$promesa$do_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48887 = arguments.length;
var i__5770__auto___48888 = (0);
while(true){
if((i__5770__auto___48888 < len__5769__auto___48887)){
args__5775__auto__.push((arguments[i__5770__auto___48888]));

var G__48889 = (i__5770__auto___48888 + (1));
i__5770__auto___48888 = G__48889;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.configs.funcool.promesa.do_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,exprs){
var pred__48728 = cljs.core._EQ_;
var expr__48729 = cljs.core.count(exprs);
if(cljs.core.truth_((pred__48728.cljs$core$IFn$_invoke$arity$2 ? pred__48728.cljs$core$IFn$_invoke$arity$2((0),expr__48729) : pred__48728.call(null,(0),expr__48729)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","resolved","promesa.core/resolved",-74821616,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
if(cljs.core.truth_((pred__48728.cljs$core$IFn$_invoke$arity$2 ? pred__48728.cljs$core$IFn$_invoke$arity$2((1),expr__48729) : pred__48728.call(null,(1),expr__48729)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(exprs),null,(1),null)))));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","bind","promesa.core/bind",990464492,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___48720__auto__","___48720__auto__",1875033568,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0))));
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(exprs),null,(1),null))))),cljs.core.reverse(cljs.core.butlast(exprs)));
}
}
}));

(sci.configs.funcool.promesa.do_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.funcool.promesa.do_BANG_.cljs$lang$applyTo = (function (seq48723){
var G__48724 = cljs.core.first(seq48723);
var seq48723__$1 = cljs.core.next(seq48723);
var G__48725 = cljs.core.first(seq48723__$1);
var seq48723__$2 = cljs.core.next(seq48723__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48724,G__48725,seq48723__$2);
}));

/**
 * An exception unsafe let-like macro. Supposes that we are already
 *   wrapped in promise context so avoids defensive wrapping.
 */
sci.configs.funcool.promesa.let_STAR_ = (function sci$configs$funcool$promesa$let_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48890 = arguments.length;
var i__5770__auto___48891 = (0);
while(true){
if((i__5770__auto___48891 < len__5769__auto___48890)){
args__5775__auto__.push((arguments[i__5770__auto___48891]));

var G__48892 = (i__5770__auto___48891 + (1));
i__5770__auto___48891 = G__48892;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw (new Error(["Assert failed: ",["Uneven binding vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bindings)].join(''),"\n","(even? (count bindings))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__48742){
var vec__48743 = p__48742;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48743,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48743,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","bind","promesa.core/bind",990464492,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,l,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0))));
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),body))),cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
}));

(sci.configs.funcool.promesa.let_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.let_STAR_.cljs$lang$applyTo = (function (seq48738){
var G__48739 = cljs.core.first(seq48738);
var seq48738__$1 = cljs.core.next(seq48738);
var G__48740 = cljs.core.first(seq48738__$1);
var seq48738__$2 = cljs.core.next(seq48738__$1);
var G__48741 = cljs.core.first(seq48738__$2);
var seq48738__$3 = cljs.core.next(seq48738__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48739,G__48740,G__48741,seq48738__$3);
}));

/**
 * A `let` alternative that always returns promise and waits for all the
 *   promises on the bindings.
 */
sci.configs.funcool.promesa.let$ = (function sci$configs$funcool$promesa$let(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48897 = arguments.length;
var i__5770__auto___48898 = (0);
while(true){
if((i__5770__auto___48898 < len__5769__auto___48897)){
args__5775__auto__.push((arguments[i__5770__auto___48898]));

var G__48899 = (i__5770__auto___48898 + (1));
i__5770__auto___48898 = G__48899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
if(cljs.core.seq(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","bind","promesa.core/bind",990464492,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___48763__auto__","___48763__auto__",-680410342,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","let*","promesa.core/let*",-1840819052,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),body)));
}
}));

(sci.configs.funcool.promesa.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.let$.cljs$lang$applyTo = (function (seq48766){
var G__48767 = cljs.core.first(seq48766);
var seq48766__$1 = cljs.core.next(seq48766);
var G__48769 = cljs.core.first(seq48766__$1);
var seq48766__$2 = cljs.core.next(seq48766__$1);
var G__48770 = cljs.core.first(seq48766__$2);
var seq48766__$3 = cljs.core.next(seq48766__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48767,G__48769,G__48770,seq48766__$3);
}));

/**
 * Like the clojure.core/->, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise. Example using to fetch data in the browser with CLJS:
 *   Example:
 *   (p/-> (js/fetch #js {...}) ; returns a promise
 *      .-body)
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
sci.configs.funcool.promesa.__GT_ = (function sci$configs$funcool$promesa$__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48906 = arguments.length;
var i__5770__auto___48907 = (0);
while(true){
if((i__5770__auto___48907 < len__5769__auto___48906)){
args__5775__auto__.push((arguments[i__5770__auto___48907]));

var G__48910 = (i__5770__auto___48907 + (1));
i__5770__auto___48907 = G__48910;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,x,forms){
var fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arg){
var vec__48786 = ((cljs.core.sequential_QMARK_(arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__48787 = cljs.core.seq(vec__48786);
var first__48788 = cljs.core.first(seq__48787);
var seq__48787__$1 = cljs.core.next(seq__48787);
var f = first__48788;
var args = seq__48787__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p__48779__auto__","p__48779__auto__",-1346787099,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__48779__auto__","p__48779__auto__",-1346787099,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fns], 0))));
}));

(sci.configs.funcool.promesa.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.__GT_.cljs$lang$applyTo = (function (seq48780){
var G__48781 = cljs.core.first(seq48780);
var seq48780__$1 = cljs.core.next(seq48780);
var G__48782 = cljs.core.first(seq48780__$1);
var seq48780__$2 = cljs.core.next(seq48780__$1);
var G__48783 = cljs.core.first(seq48780__$2);
var seq48780__$3 = cljs.core.next(seq48780__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48781,G__48782,G__48783,seq48780__$3);
}));

/**
 * Like the clojure.core/->>, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise. Example using to fetch data in the browser with CLJS:
 *   Example:
 *   (p/->> (js/fetch #js {...}) ; returns a promise
 *       .-body
 *       read-string
 *       (mapv inc)
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
sci.configs.funcool.promesa.__GT__GT_ = (function sci$configs$funcool$promesa$__GT__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48915 = arguments.length;
var i__5770__auto___48916 = (0);
while(true){
if((i__5770__auto___48916 < len__5769__auto___48915)){
args__5775__auto__.push((arguments[i__5770__auto___48916]));

var G__48917 = (i__5770__auto___48916 + (1));
i__5770__auto___48916 = G__48917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,x,forms){
var fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arg){
var vec__48796 = ((cljs.core.sequential_QMARK_(arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__48797 = cljs.core.seq(vec__48796);
var first__48798 = cljs.core.first(seq__48797);
var seq__48797__$1 = cljs.core.next(seq__48797);
var f = first__48798;
var args = seq__48797__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p__48790__auto__","p__48790__auto__",633209247,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p__48790__auto__","p__48790__auto__",633209247,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fns], 0))));
}));

(sci.configs.funcool.promesa.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.__GT__GT_.cljs$lang$applyTo = (function (seq48791){
var G__48792 = cljs.core.first(seq48791);
var seq48791__$1 = cljs.core.next(seq48791);
var G__48793 = cljs.core.first(seq48791__$1);
var seq48791__$2 = cljs.core.next(seq48791__$1);
var G__48794 = cljs.core.first(seq48791__$2);
var seq48791__$3 = cljs.core.next(seq48791__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48792,G__48793,G__48794,seq48791__$3);
}));

/**
 * Like clojure.core/with-redefs, but it will handle promises in
 *   body and wait until they resolve or reject before restoring the
 *   bindings. Useful for mocking async APIs.
 *   Example:
 *   (defn async-func [] (p/delay 1000 :slow-original))
 *   (p/with-redefs [async-func (fn [] (p/resolved :fast-mock))]
 *  (async-func))
 *   The result is a promise that will resolve to the last body form and
 *   upon resolving restores the bindings to their original values.
 */
sci.configs.funcool.promesa.with_redefs = (function sci$configs$funcool$promesa$with_redefs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48918 = arguments.length;
var i__5770__auto___48919 = (0);
while(true){
if((i__5770__auto___48919 < len__5769__auto___48918)){
args__5775__auto__.push((arguments[i__5770__auto___48919]));

var G__48920 = (i__5770__auto___48919 + (1));
i__5770__auto___48919 = G__48920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var orig_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__48805_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48805_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__48806_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48806_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,orig_val_syms));
var bind_value = (function (p__48814){
var vec__48815 = p__48814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48815,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","alter-var-root","clojure.core/alter-var-root",-1449491008,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","constantly","clojure.core/constantly",1026935908,null),(new cljs.core.List(null,v,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(orig_val_syms,names),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(temp_val_syms,vals))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","->","promesa.core/->",-530209568,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets)], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.with_redefs.cljs$lang$applyTo = (function (seq48807){
var G__48808 = cljs.core.first(seq48807);
var seq48807__$1 = cljs.core.next(seq48807);
var G__48809 = cljs.core.first(seq48807__$1);
var seq48807__$2 = cljs.core.next(seq48807__$1);
var G__48810 = cljs.core.first(seq48807__$2);
var seq48807__$3 = cljs.core.next(seq48807__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48808,G__48809,G__48810,seq48807__$3);
}));

sci.configs.funcool.promesa.loop_run_fn = sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"*loop-run-fn*","*loop-run-fn*",-90130279,null),promesa.exec.run_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.configs.funcool.promesa.pns], null));
sci.configs.funcool.promesa.loop = (function sci$configs$funcool$promesa$loop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48921 = arguments.length;
var i__5770__auto___48922 = (0);
while(true){
if((i__5770__auto___48922 < len__5769__auto___48921)){
args__5775__auto__.push((arguments[i__5770__auto___48922]));

var G__48923 = (i__5770__auto___48922 + (1));
i__5770__auto___48922 = G__48923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
var bindings__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),bindings);
var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bindings__$1);
var fvals = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bindings__$1);
var tsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("loop");
var dsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("deferred");
var rsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("run");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","*loop-run-fn*","promesa.core/*loop-run-fn*",448089407,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","deferred","promesa.core/deferred",-880308979,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"params__48818__auto__","params__48818__auto__",1628887677,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"params__48818__auto__","params__48818__auto__",1628887677,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(names)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","handle","promesa.core/handle",-1644778541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"res__48819__auto__","res__48819__auto__",1579486676,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__48820__auto__","err__48820__auto__",-1437576534,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__48820__auto__","err__48820__auto__",-1437576534,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","reject!","promesa.core/reject!",-314773537,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__48820__auto__","err__48820__auto__",-1437576534,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__48819__auto__","res__48819__auto__",1579486676,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__48819__auto__","res__48819__auto__",1579486676,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__48819__auto__","res__48819__auto__",1579486676,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","resolve!","promesa.core/resolve!",1603668640,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"res__48819__auto__","res__48819__auto__",1579486676,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,fvals,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.loop.cljs$lang$applyTo = (function (seq48821){
var G__48822 = cljs.core.first(seq48821);
var seq48821__$1 = cljs.core.next(seq48821);
var G__48823 = cljs.core.first(seq48821__$1);
var seq48821__$2 = cljs.core.next(seq48821__$1);
var G__48824 = cljs.core.first(seq48821__$2);
var seq48821__$3 = cljs.core.next(seq48821__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48822,G__48823,G__48824,seq48821__$3);
}));

sci.configs.funcool.promesa.recur = (function sci$configs$funcool$promesa$recur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48926 = arguments.length;
var i__5770__auto___48927 = (0);
while(true){
if((i__5770__auto___48927 < len__5769__auto___48926)){
args__5775__auto__.push((arguments[i__5770__auto___48927]));

var G__48928 = (i__5770__auto___48927 + (1));
i__5770__auto___48927 = G__48928;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.configs.funcool.promesa.recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.recur.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.funcool.promesa.recur.cljs$lang$applyTo = (function (seq48835){
var G__48836 = cljs.core.first(seq48835);
var seq48835__$1 = cljs.core.next(seq48835);
var G__48837 = cljs.core.first(seq48835__$1);
var seq48835__$2 = cljs.core.next(seq48835__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48836,G__48837,seq48835__$2);
}));

/**
 * Simplified version of `doseq` which takes one binding and a seq, and
 *   runs over it using `promesa.core/run!`
 */
sci.configs.funcool.promesa.doseq = (function sci$configs$funcool$promesa$doseq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48930 = arguments.length;
var i__5770__auto___48931 = (0);
while(true){
if((i__5770__auto___48931 < len__5769__auto___48930)){
args__5775__auto__.push((arguments[i__5770__auto___48931]));

var G__48932 = (i__5770__auto___48931 + (1));
i__5770__auto___48931 = G__48932;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,p__48849,body){
var vec__48850 = p__48849;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48850,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48850,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","run!","promesa.core/run!",-1526702839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,xs,null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.doseq.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.doseq.cljs$lang$applyTo = (function (seq48844){
var G__48845 = cljs.core.first(seq48844);
var seq48844__$1 = cljs.core.next(seq48844);
var G__48846 = cljs.core.first(seq48844__$1);
var seq48844__$2 = cljs.core.next(seq48844__$1);
var G__48847 = cljs.core.first(seq48844__$2);
var seq48844__$3 = cljs.core.next(seq48844__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48845,G__48846,G__48847,seq48844__$3);
}));

/**
 * Analogous macro to `clojure.core/future` that returns promise
 *   instance instead of the `Future`. Exposed just for convenience and
 *   works as an alias to `thread`.
 */
sci.configs.funcool.promesa.future = (function sci$configs$funcool$promesa$future(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48943 = arguments.length;
var i__5770__auto___48944 = (0);
while(true){
if((i__5770__auto___48944 < len__5769__auto___48943)){
args__5775__auto__.push((arguments[i__5770__auto___48944]));

var G__48947 = (i__5770__auto___48944 + (1));
i__5770__auto___48944 = G__48947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.configs.funcool.promesa.future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.future.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","thread-call","promesa.core/thread-call",472685991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"sci/configs/funcool/promesa.cljs",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,164,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,36,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,164,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,38,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.funcool.promesa.future.cljs$lang$applyTo = (function (seq48854){
var G__48855 = cljs.core.first(seq48854);
var seq48854__$1 = cljs.core.next(seq48854);
var G__48856 = cljs.core.first(seq48854__$1);
var seq48854__$2 = cljs.core.next(seq48854__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48855,G__48856,seq48854__$2);
}));

sci.configs.funcool.promesa.promesa_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),new cljs.core.Symbol(null,"bind","bind",1527103110,null),new cljs.core.Symbol(null,"extract","extract",399446909,null),new cljs.core.Symbol(null,"rejected?","rejected?",798889341,null),new cljs.core.Symbol(null,"all","all",-1762306027,null),new cljs.core.Symbol(null,"rejected","rejected",1871584526,null),new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"reject!","reject!",-854885003,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"wait-all*","wait-all*",-1875097397,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"then","then",2101129597,null),new cljs.core.Symbol(null,"pending?","pending?",-493087265,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"future","future",-776593045,null),new cljs.core.Symbol(null,"handle","handle",-1115486915,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"create","create",339032271,null),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Symbol(null,"run!","run!",-2055483725,null),new cljs.core.Symbol(null,"wait-all","wait-all",-698545912,null),new cljs.core.Symbol(null,"race","race",-1960778897,null),new cljs.core.Symbol(null,"thread-call","thread-call",1007693373,null),new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),new cljs.core.Symbol(null,"do*","do*",-1215207885,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"resolve!","resolve!",2140913414,null),new cljs.core.Symbol(null,"thenable?","thenable?",-1206584560,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"any","any",-948528346,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null),new cljs.core.Symbol(null,"mapcat","mapcat",-601348859,null),new cljs.core.Symbol(null,"*loop-run-fn*","*loop-run-fn*",-90130279,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"resolved","resolved",-1685672202,null),new cljs.core.Symbol(null,"resolved?","resolved?",-1791920380,null)],[(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.deferred;},new cljs.core.Symbol("promesa.core","deferred","promesa.core/deferred",-880308979,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),"promesa/core.cljc",15,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Creates an empty promise instance.",(cljs.core.truth_(promesa.core.deferred)?promesa.core.deferred.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.bind;},new cljs.core.Symbol("promesa.core","bind","promesa.core/bind",990464492,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"bind","bind",1527103110,null),"promesa/core.cljc",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,162,162,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Chains a function `f` to be executed with when the promise `p` is\n  successfully resolved. Returns a promise that will mirror the\n  promise instance returned by calling `f` with the value as single\n  argument; `f` **must** return a promise instance.\n\n  The computation will be executed in the completion thread by\n  default; you also can provide a custom executor.",(cljs.core.truth_(promesa.core.bind)?promesa.core.bind.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.extract;},new cljs.core.Symbol("promesa.core","extract","promesa.core/extract",2000380135,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"extract","extract",399446909,null),"promesa/core.cljc",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,120,120,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)),"Returns the current promise value.",(cljs.core.truth_(promesa.core.extract)?promesa.core.extract.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.rejected_QMARK_;},new cljs.core.Symbol("promesa.core","rejected?","promesa.core/rejected?",-812997913,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"rejected?","rejected?",798889341,null),"promesa/core.cljc",16,1,110,110,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Returns true if promise `p` is already rejected.",(cljs.core.truth_(promesa.core.rejected_QMARK_)?promesa.core.rejected_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.all;},new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"all","all",-1762306027,null),"promesa/core.cljc",10,1,358,358,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null)),"Given an array of promises, return a promise that is fulfilled when\n  all the items in the array are fulfilled.\n\n  Example:\n\n  ```\n  (-> (p/all [(promise :first-promise)\n              (promise :second-promise)])\n      (then (fn [[first-result second-result]])\n              (println (str first-result \", \" second-result))))\n  ```\n\n  Will print to out `:first-promise, :second-promise`.\n\n  If at least one of the promises is rejected, the resulting promise\n  will be rejected.",(cljs.core.truth_(promesa.core.all)?promesa.core.all.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.rejected;},new cljs.core.Symbol("promesa.core","rejected","promesa.core/rejected",1335525992,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"rejected","rejected",1871584526,null),"promesa/core.cljc",15,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Return a rejected promise with provided reason.",(cljs.core.truth_(promesa.core.rejected)?promesa.core.rejected.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.promise;},new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"promise","promise",-887306482,null),"promesa/core.cljc",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,47,47,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"The coerce based promise constructor. Creates an appropriate promise\n  instance depending on the provided value.\n\n  If an executor is provided, it will be used to resolve this\n  promise.",(cljs.core.truth_(promesa.core.promise)?promesa.core.promise.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.reject_BANG_;},new cljs.core.Symbol("promesa.core","reject!","promesa.core/reject!",-314773537,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"reject!","reject!",-854885003,null),"promesa/core.cljc",14,1,494,494,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),"Reject a completable promise with an error.",(cljs.core.truth_(promesa.core.reject_BANG_)?promesa.core.reject_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.with_redefs;},new cljs.core.Symbol("sci.configs.funcool.promesa","with-redefs","sci.configs.funcool.promesa/with-redefs",-1201509054,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null),"sci/configs/funcool/promesa.cljs",26,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,84,true,84,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Like clojure.core/with-redefs, but it will handle promises in\n  body and wait until they resolve or reject before restoring the\n  bindings. Useful for mocking async APIs.\n  Example:\n  (defn async-func [] (p/delay 1000 :slow-original))\n  (p/with-redefs [async-func (fn [] (p/resolved :fast-mock))]\n    (async-func))\n  The result is a promise that will resolve to the last body form and\n  upon resolving restores the bindings to their original values.",(cljs.core.truth_(sci.configs.funcool.promesa.with_redefs)?sci.configs.funcool.promesa.with_redefs.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.do_BANG_;},new cljs.core.Symbol("sci.configs.funcool.promesa","do!","sci.configs.funcool.promesa/do!",-462528085,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",-858606675,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,15,true,15,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),"Execute potentially side effectful code and return a promise resolved\n  to the last expression. Always awaiting the result of each\n  expression.",(cljs.core.truth_(sci.configs.funcool.promesa.do_BANG_)?sci.configs.funcool.promesa.do_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.loop;},new cljs.core.Symbol("sci.configs.funcool.promesa","loop","sci.configs.funcool.promesa/loop",1183765459,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),"sci/configs/funcool/promesa.cljs",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,115,true,115,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),null,(cljs.core.truth_(sci.configs.funcool.promesa.loop)?sci.configs.funcool.promesa.loop.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.__GT__GT_;},new cljs.core.Symbol("sci.configs.funcool.promesa","->>","sci.configs.funcool.promesa/->>",-1929785446,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,65,true,65,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Like the clojure.core/->>, but it will handle promises in values\n  and make sure the next form gets the value realized instead of\n  the promise. Example using to fetch data in the browser with CLJS:\n  Example:\n  (p/->> (js/fetch #js {...}) ; returns a promise\n         .-body\n         read-string\n         (mapv inc)\n  The result of a thread is a promise that will resolve to the\n  end of the thread chain.",(cljs.core.truth_(sci.configs.funcool.promesa.__GT__GT_)?sci.configs.funcool.promesa.__GT__GT_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.wait_all_STAR_;},new cljs.core.Symbol("promesa.core","wait-all*","promesa.core/wait-all*",-1337338527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"wait-all*","wait-all*",-1875097397,null),"promesa/core.cljc",16,1,423,423,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null)),"Given an array of promises, return a promise that is fulfilled when\n  all the items in the array are resolved (independently if\n  successfully or exceptionally).\n\n  Example:\n\n  ```\n  (->> (p/wait-all* [(promise :first-promise)\n                     (promise :second-promise)])\n       (p/fmap (fn [_]\n                 (println \"done\"))))\n  ```\n\n  Rejected promises also counts as resolved.",(cljs.core.truth_(promesa.core.wait_all_STAR_)?promesa.core.wait_all_STAR_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.doseq;},new cljs.core.Symbol("sci.configs.funcool.promesa","doseq","sci.configs.funcool.promesa/doseq",160478274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),"sci/configs/funcool/promesa.cljs",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,150,true,150,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Simplified version of `doseq` which takes one binding and a seq, and\n  runs over it using `promesa.core/run!`",(cljs.core.truth_(sci.configs.funcool.promesa.doseq)?sci.configs.funcool.promesa.doseq.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.then;},new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"then","then",2101129597,null),"promesa/core.cljc",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,134,134,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Chains a function `f` to be executed when the promise `p` is\n  successfully resolved. Returns a promise that will be resolved with\n  the return value of calling `f` with value as single argument; `f`\n  can return a plain value or promise instance, an automatic\n  unwrapping will be performed.\n\n  The computation will be executed in the completion thread by\n  default; you also can provide a custom executor.",(cljs.core.truth_(promesa.core.then)?promesa.core.then.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.pending_QMARK_;},new cljs.core.Symbol("promesa.core","pending?","promesa.core/pending?",-1031764111,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"pending?","pending?",-493087265,null),"promesa/core.cljc",15,1,115,115,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Returns true if promise `p` is stil pending.",(cljs.core.truth_(promesa.core.pending_QMARK_)?promesa.core.pending_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.finally$;},new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"promesa/core.cljc",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,256,256,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Like `handle` but ignores the return value. Returns a promise that\n  will mirror the original one.",(cljs.core.truth_(promesa.core.finally$)?promesa.core.finally$.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.future;},new cljs.core.Symbol("sci.configs.funcool.promesa","future","sci.configs.funcool.promesa/future",-574608500,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"future","future",-776593045,null),"sci/configs/funcool/promesa.cljs",21,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,159,true,159,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Analogous macro to `clojure.core/future` that returns promise\n  instance instead of the `Future`. Exposed just for convenience and\n  works as an alias to `thread`.",(cljs.core.truth_(sci.configs.funcool.promesa.future)?sci.configs.funcool.promesa.future.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.handle;},new cljs.core.Symbol("promesa.core","handle","promesa.core/handle",-1644778541,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"handle","handle",-1115486915,null),"promesa/core.cljc",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,230,230,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Chains a function `f` to be executed when the promise `p` is completed\n  (resolved or rejected) and returns a promise completed (resolving or\n  rejecting) with the return value of calling `f` with both: value and\n  the exception; `f` can return a new plain value or promise instance,\n  and automatic unwrapping will be performed.\n\n  The computation will be executed in the completion thread by\n  default; you also can provide a custom executor.\n\n  For performance sensitive code, look at `hmap` and `hcat`.",(cljs.core.truth_(promesa.core.handle)?promesa.core.handle.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.let_STAR_;},new cljs.core.Symbol("sci.configs.funcool.promesa","let*","sci.configs.funcool.promesa/let*",2008147989,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),"sci/configs/funcool/promesa.cljs",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,28,true,28,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"An exception unsafe let-like macro. Supposes that we are already\n  wrapped in promise context so avoids defensive wrapping.",(cljs.core.truth_(sci.configs.funcool.promesa.let_STAR_)?sci.configs.funcool.promesa.let_STAR_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.create;},new cljs.core.Symbol("promesa.core","create","promesa.core/create",1948896117,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"create","create",339032271,null),"promesa/core.cljc",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,64,64,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Create a promise instance from a factory function. If an executor is\n  provided, the factory will be executed in the provided executor.\n\n  A factory function looks like `(fn [resolve reject] (resolve 1))`.",(cljs.core.truth_(promesa.core.create)?promesa.core.create.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.error;},new cljs.core.Symbol("promesa.core","error","promesa.core/error",125448597,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"error","error",661562495,null),"promesa/core.cljc",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,350,350,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Same as `catch` but with parameters inverted.\n\n  DEPRECATED",(cljs.core.truth_(promesa.core.error)?promesa.core.error.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.run_BANG_;},new cljs.core.Symbol("promesa.core","run!","promesa.core/run!",-1526702839,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"run!","run!",-2055483725,null),"promesa/core.cljc",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,465,465,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"A promise aware run! function. Executed in terms of `then` rules.",(cljs.core.truth_(promesa.core.run_BANG_)?promesa.core.run_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.wait_all;},new cljs.core.Symbol("promesa.core","wait-all","promesa.core/wait-all",-162995050,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"wait-all","wait-all",-698545912,null),"promesa/core.cljc",15,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"promises","promises",988201016,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"promises","promises",988201016,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,451,451,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"promises","promises",988201016,null)], null)),"Given a variable number of promises, returns a promise which resolves\n  to `nil` when all provided promises complete (rejected or resolved).\n\n  **EXPERIMENTAL**",(cljs.core.truth_(promesa.core.wait_all)?promesa.core.wait_all.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.race;},new cljs.core.Symbol("promesa.core","race","promesa.core/race",-346786155,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"race","race",-1960778897,null),"promesa/core.cljc",11,1,378,378,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null)),null,(cljs.core.truth_(promesa.core.race)?promesa.core.race.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.thread_call;},new cljs.core.Symbol("promesa.core","thread-call","promesa.core/thread-call",472685991,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"thread-call","thread-call",1007693373,null),"promesa/core.cljc",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,609,609,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),"Analogous to `clojure.core.async/thread` that returns a promise\n  instance instead of the `Future`. Useful for executing synchronous\n  code in a separate thread (also works in cljs).",(cljs.core.truth_(promesa.core.thread_call)?promesa.core.thread_call.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.promise_QMARK_;},new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),"promesa/core.cljc",15,1,87,87,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Return true if `v` is a promise instance.",(cljs.core.truth_(promesa.core.promise_QMARK_)?promesa.core.promise_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.do_BANG_;},new cljs.core.Symbol("sci.configs.funcool.promesa","do!","sci.configs.funcool.promesa/do!",-462528085,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",-858606675,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,15,true,15,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),"Execute potentially side effectful code and return a promise resolved\n  to the last expression. Always awaiting the result of each\n  expression.",(cljs.core.truth_(sci.configs.funcool.promesa.do_BANG_)?sci.configs.funcool.promesa.do_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.let$;},new cljs.core.Symbol("sci.configs.funcool.promesa","let","sci.configs.funcool.promesa/let",294810545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"let","let",358118826,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,38,true,38,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"A `let` alternative that always returns promise and waits for all the\n  promises on the bindings.",(cljs.core.truth_(sci.configs.funcool.promesa.let$)?sci.configs.funcool.promesa.let$.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.done_QMARK_;},new cljs.core.Symbol("promesa.core","done?","promesa.core/done?",-744091465,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),"promesa/core.cljc",12,1,127,127,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Returns true if promise `p` is already done.",(cljs.core.truth_(promesa.core.done_QMARK_)?promesa.core.done_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.resolve_BANG_;},new cljs.core.Symbol("promesa.core","resolve!","promesa.core/resolve!",1603668640,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"resolve!","resolve!",2140913414,null),"promesa/core.cljc",15,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,489,489,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Resolve a completable promise with a value.",(cljs.core.truth_(promesa.core.resolve_BANG_)?promesa.core.resolve_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.thenable_QMARK_;},new cljs.core.Symbol("promesa.core","thenable?","promesa.core/thenable?",1479042294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"thenable?","thenable?",-1206584560,null),"promesa/core.cljc",19,4,98,98,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Returns true if `v` is a promise like object.",(cljs.core.truth_(promesa.core.thenable_QMARK_)?promesa.core.thenable_QMARK_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.timeout;},new cljs.core.Symbol("promesa.core","timeout","promesa.core/timeout",1859519163,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),"promesa/core.cljc",14,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),4,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),4,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,524,524,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)),"Returns a cancellable promise that will be fulfilled with this\n  promise's fulfillment value or rejection reason.  However, if this\n  promise is not fulfilled or rejected within `ms` milliseconds, the\n  returned promise is cancelled with a TimeoutError.",(cljs.core.truth_(promesa.core.timeout)?promesa.core.timeout.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.map;},new cljs.core.Symbol("promesa.core","map","promesa.core/map",1402366606,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),"promesa/core.cljc",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,175,175,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Chains a function `f` to be executed when the promise `p` is\n  successfully resolved. Returns a promise that will be resolved with\n  the return value of calling `f` with value as single argument.\n\n  The computation will be executed in the completion thread by\n  default; you also can provide a custom executor.\n\n  This function is intended to be used with `->>`.",(cljs.core.truth_(promesa.core.map)?promesa.core.map.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.any;},new cljs.core.Symbol("promesa.core","any","promesa.core/any",660743608,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"any","any",-948528346,null),"promesa/core.cljc",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,382,382,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)),"Given an array of promises, return a promise that is fulfilled when\n  first one item in the array is fulfilled.",(cljs.core.truth_(promesa.core.any)?promesa.core.any.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.catch$;},new cljs.core.Symbol("promesa.core","catch","promesa.core/catch",-1078163451,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"promesa/core.cljc",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"pred-or-type","pred-or-type",1387438641,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"pred-or-type","pred-or-type",1387438641,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,314,314,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"pred-or-type","pred-or-type",1387438641,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),"Chains a function `f` to be executed when the promise `p` is\n  rejected. Returns a promise that will be resolved with the return\n  value of calling `f` with exception as single argument; `f` can\n  return a plain value or promise instance, an automatic unwrapping\n  will be performed.\n\n  The computation will be executed in the completion thread, look at\n  `merr` if you want the ability to schedule the computation to other\n  thread.",(cljs.core.truth_(promesa.core.catch$)?promesa.core.catch$.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.recur;},new cljs.core.Symbol("sci.configs.funcool.promesa","recur","sci.configs.funcool.promesa/recur",1132058078,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),"sci/configs/funcool/promesa.cljs",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"args","args",-1338879193,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,146,true,146,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(sci.configs.funcool.promesa.recur)?sci.configs.funcool.promesa.recur.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.do_BANG_;},new cljs.core.Symbol("sci.configs.funcool.promesa","do!","sci.configs.funcool.promesa/do!",-462528085,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",-858606675,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,15,true,15,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),"Execute potentially side effectful code and return a promise resolved\n  to the last expression. Always awaiting the result of each\n  expression.",(cljs.core.truth_(sci.configs.funcool.promesa.do_BANG_)?sci.configs.funcool.promesa.do_BANG_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.wrap;},new cljs.core.Symbol("promesa.core","wrap","promesa.core/wrap",1962895564,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null),"promesa/core.cljc",11,1,58,58,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"A convenience alias for `promise` coercion function that only accepts\n  a single argument.",(cljs.core.truth_(promesa.core.wrap)?promesa.core.wrap.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.mapcat;},new cljs.core.Symbol("promesa.core","mapcat","promesa.core/mapcat",-64727389,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"mapcat","mapcat",-601348859,null),"promesa/core.cljc",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,196,196,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Chains a function `f` to be executed when the promise `p` is\n  successfully resolved. Returns a promise that will mirror the\n  promise instance returned by calling `f` with the value as single\n  argument; `f` **must** return a promise instance.\n\n  The computation will be executed in the completion thread by\n  default; you also can provide a custom executor.\n\n  This funciton is intended to be used with `->>`.",(cljs.core.truth_(promesa.core.mapcat)?promesa.core.mapcat.cljs$lang$test:null)]));
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
})(),sci.configs.funcool.promesa.loop_run_fn,(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.delay;},new cljs.core.Symbol("promesa.core","delay","promesa.core/delay",528553114,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),"promesa/core.cljc",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,538,538,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)),"Given a timeout in miliseconds and optional value, returns a promise\n  that will be fulfilled with provided value (or nil) after the time is\n  reached.",(cljs.core.truth_(promesa.core.delay)?promesa.core.delay.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.__GT_;},new cljs.core.Symbol("sci.configs.funcool.promesa","->","sci.configs.funcool.promesa/->",-2066861977,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),"sci/configs/funcool/promesa.cljs",17,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,48,true,48,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Like the clojure.core/->, but it will handle promises in values\n  and make sure the next form gets the value realized instead of\n  the promise. Example using to fetch data in the browser with CLJS:\n  Example:\n  (p/-> (js/fetch #js {...}) ; returns a promise\n        .-body)\n  The result of a thread is a promise that will resolve to the\n  end of the thread chain.",(cljs.core.truth_(sci.configs.funcool.promesa.__GT_)?sci.configs.funcool.promesa.__GT_.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.chain;},new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),"promesa/core.cljc",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fs","fs",-482394717,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,218,218,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fs","fs",-482394717,null)], null)),"Chain variable number of functions to be executed serially using\n  `then`.",(cljs.core.truth_(promesa.core.chain)?promesa.core.chain.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.resolved;},new cljs.core.Symbol("promesa.core","resolved","promesa.core/resolved",-74821616,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"resolved","resolved",-1685672202,null),"promesa/core.cljc",15,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Return a resolved promise with provided value.",(cljs.core.truth_(promesa.core.resolved)?promesa.core.resolved.cljs$lang$test:null)]));
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
})(),(function (){var ns__46341__auto__ = sci.configs.funcool.promesa.pns;
var var__46342__auto__ = new cljs.core.Var(function(){return promesa.core.resolved_QMARK_;},new cljs.core.Symbol("promesa.core","resolved?","promesa.core/resolved?",1967456878,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"resolved?","resolved?",-1791920380,null),"promesa/core.cljc",16,1,105,105,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Returns true if promise `p` is already fulfilled.",(cljs.core.truth_(promesa.core.resolved_QMARK_)?promesa.core.resolved_QMARK_.cljs$lang$test:null)]));
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
sci.configs.funcool.promesa.pims = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"promesa.impl","promesa.impl",1879932595,null),null);
sci.configs.funcool.promesa.namespaces = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),sci.configs.funcool.promesa.promesa_namespace], null);
sci.configs.funcool.promesa.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),sci.configs.funcool.promesa.namespaces], null);

//# sourceMappingURL=sci.configs.funcool.promesa.js.map
