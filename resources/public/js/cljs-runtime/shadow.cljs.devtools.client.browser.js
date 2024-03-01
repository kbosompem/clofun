goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37817 = arguments.length;
var i__5770__auto___37818 = (0);
while(true){
if((i__5770__auto___37818 < len__5769__auto___37817)){
args__5775__auto__.push((arguments[i__5770__auto___37818]));

var G__37821 = (i__5770__auto___37818 + (1));
i__5770__auto___37818 = G__37821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37232){
var G__37233 = cljs.core.first(seq37232);
var seq37232__$1 = cljs.core.next(seq37232);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37233,seq37232__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37240 = cljs.core.seq(sources);
var chunk__37241 = null;
var count__37242 = (0);
var i__37243 = (0);
while(true){
if((i__37243 < count__37242)){
var map__37261 = chunk__37241.cljs$core$IIndexed$_nth$arity$2(null,i__37243);
var map__37261__$1 = cljs.core.__destructure_map(map__37261);
var src = map__37261__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37263){var e_37822 = e37263;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37822);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37822.message)].join('')));
}

var G__37823 = seq__37240;
var G__37824 = chunk__37241;
var G__37825 = count__37242;
var G__37826 = (i__37243 + (1));
seq__37240 = G__37823;
chunk__37241 = G__37824;
count__37242 = G__37825;
i__37243 = G__37826;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37240);
if(temp__5804__auto__){
var seq__37240__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37240__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37240__$1);
var G__37827 = cljs.core.chunk_rest(seq__37240__$1);
var G__37828 = c__5568__auto__;
var G__37829 = cljs.core.count(c__5568__auto__);
var G__37830 = (0);
seq__37240 = G__37827;
chunk__37241 = G__37828;
count__37242 = G__37829;
i__37243 = G__37830;
continue;
} else {
var map__37265 = cljs.core.first(seq__37240__$1);
var map__37265__$1 = cljs.core.__destructure_map(map__37265);
var src = map__37265__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37266){var e_37831 = e37266;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37831);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37831.message)].join('')));
}

var G__37832 = cljs.core.next(seq__37240__$1);
var G__37833 = null;
var G__37834 = (0);
var G__37835 = (0);
seq__37240 = G__37832;
chunk__37241 = G__37833;
count__37242 = G__37834;
i__37243 = G__37835;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37284 = cljs.core.seq(js_requires);
var chunk__37288 = null;
var count__37289 = (0);
var i__37290 = (0);
while(true){
if((i__37290 < count__37289)){
var js_ns = chunk__37288.cljs$core$IIndexed$_nth$arity$2(null,i__37290);
var require_str_37837 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37837);


var G__37838 = seq__37284;
var G__37839 = chunk__37288;
var G__37840 = count__37289;
var G__37841 = (i__37290 + (1));
seq__37284 = G__37838;
chunk__37288 = G__37839;
count__37289 = G__37840;
i__37290 = G__37841;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37284);
if(temp__5804__auto__){
var seq__37284__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37284__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37284__$1);
var G__37842 = cljs.core.chunk_rest(seq__37284__$1);
var G__37843 = c__5568__auto__;
var G__37844 = cljs.core.count(c__5568__auto__);
var G__37845 = (0);
seq__37284 = G__37842;
chunk__37288 = G__37843;
count__37289 = G__37844;
i__37290 = G__37845;
continue;
} else {
var js_ns = cljs.core.first(seq__37284__$1);
var require_str_37846 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37846);


var G__37847 = cljs.core.next(seq__37284__$1);
var G__37848 = null;
var G__37849 = (0);
var G__37850 = (0);
seq__37284 = G__37847;
chunk__37288 = G__37848;
count__37289 = G__37849;
i__37290 = G__37850;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37294){
var map__37295 = p__37294;
var map__37295__$1 = cljs.core.__destructure_map(map__37295);
var msg = map__37295__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37295__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37295__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37299(s__37300){
return (new cljs.core.LazySeq(null,(function (){
var s__37300__$1 = s__37300;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37300__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37305 = cljs.core.first(xs__6360__auto__);
var map__37305__$1 = cljs.core.__destructure_map(map__37305);
var src = map__37305__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37305__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__37300__$1,map__37305,map__37305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37295,map__37295__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37299_$_iter__37301(s__37302){
return (new cljs.core.LazySeq(null,((function (s__37300__$1,map__37305,map__37305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37295,map__37295__$1,msg,info,reload_info){
return (function (){
var s__37302__$1 = s__37302;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37302__$1);
if(temp__5804__auto____$1){
var s__37302__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37302__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37302__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37304 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37303 = (0);
while(true){
if((i__37303 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__37303);
cljs.core.chunk_append(b__37304,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37851 = (i__37303 + (1));
i__37303 = G__37851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37304),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37299_$_iter__37301(cljs.core.chunk_rest(s__37302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37304),null);
}
} else {
var warning = cljs.core.first(s__37302__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37299_$_iter__37301(cljs.core.rest(s__37302__$2)));
}
} else {
return null;
}
break;
}
});})(s__37300__$1,map__37305,map__37305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37295,map__37295__$1,msg,info,reload_info))
,null,null));
});})(s__37300__$1,map__37305,map__37305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37295,map__37295__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37299(cljs.core.rest(s__37300__$1)));
} else {
var G__37853 = cljs.core.rest(s__37300__$1);
s__37300__$1 = G__37853;
continue;
}
} else {
var G__37854 = cljs.core.rest(s__37300__$1);
s__37300__$1 = G__37854;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37319_37855 = cljs.core.seq(warnings);
var chunk__37320_37856 = null;
var count__37321_37857 = (0);
var i__37322_37858 = (0);
while(true){
if((i__37322_37858 < count__37321_37857)){
var map__37329_37860 = chunk__37320_37856.cljs$core$IIndexed$_nth$arity$2(null,i__37322_37858);
var map__37329_37861__$1 = cljs.core.__destructure_map(map__37329_37860);
var w_37862 = map__37329_37861__$1;
var msg_37863__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329_37861__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329_37861__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329_37861__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329_37861__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37866)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37864),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37865),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37863__$1)].join(''));


var G__37870 = seq__37319_37855;
var G__37871 = chunk__37320_37856;
var G__37872 = count__37321_37857;
var G__37873 = (i__37322_37858 + (1));
seq__37319_37855 = G__37870;
chunk__37320_37856 = G__37871;
count__37321_37857 = G__37872;
i__37322_37858 = G__37873;
continue;
} else {
var temp__5804__auto___37874 = cljs.core.seq(seq__37319_37855);
if(temp__5804__auto___37874){
var seq__37319_37875__$1 = temp__5804__auto___37874;
if(cljs.core.chunked_seq_QMARK_(seq__37319_37875__$1)){
var c__5568__auto___37878 = cljs.core.chunk_first(seq__37319_37875__$1);
var G__37879 = cljs.core.chunk_rest(seq__37319_37875__$1);
var G__37880 = c__5568__auto___37878;
var G__37881 = cljs.core.count(c__5568__auto___37878);
var G__37882 = (0);
seq__37319_37855 = G__37879;
chunk__37320_37856 = G__37880;
count__37321_37857 = G__37881;
i__37322_37858 = G__37882;
continue;
} else {
var map__37331_37883 = cljs.core.first(seq__37319_37875__$1);
var map__37331_37884__$1 = cljs.core.__destructure_map(map__37331_37883);
var w_37885 = map__37331_37884__$1;
var msg_37886__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331_37884__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331_37884__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331_37884__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331_37884__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37889)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37887),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37888),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37886__$1)].join(''));


var G__37890 = cljs.core.next(seq__37319_37875__$1);
var G__37891 = null;
var G__37892 = (0);
var G__37893 = (0);
seq__37319_37855 = G__37890;
chunk__37320_37856 = G__37891;
count__37321_37857 = G__37892;
i__37322_37858 = G__37893;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37293_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37293_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37333){
var map__37336 = p__37333;
var map__37336__$1 = cljs.core.__destructure_map(map__37336);
var msg = map__37336__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37336__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37336__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37337 = cljs.core.seq(updates);
var chunk__37339 = null;
var count__37340 = (0);
var i__37341 = (0);
while(true){
if((i__37341 < count__37340)){
var path = chunk__37339.cljs$core$IIndexed$_nth$arity$2(null,i__37341);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37520_37894 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37524_37895 = null;
var count__37525_37896 = (0);
var i__37526_37897 = (0);
while(true){
if((i__37526_37897 < count__37525_37896)){
var node_37899 = chunk__37524_37895.cljs$core$IIndexed$_nth$arity$2(null,i__37526_37897);
if(cljs.core.not(node_37899.shadow$old)){
var path_match_37900 = shadow.cljs.devtools.client.browser.match_paths(node_37899.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37900)){
var new_link_37901 = (function (){var G__37586 = node_37899.cloneNode(true);
G__37586.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37900),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37586;
})();
(node_37899.shadow$old = true);

(new_link_37901.onload = ((function (seq__37520_37894,chunk__37524_37895,count__37525_37896,i__37526_37897,seq__37337,chunk__37339,count__37340,i__37341,new_link_37901,path_match_37900,node_37899,path,map__37336,map__37336__$1,msg,updates,reload_info){
return (function (e){
var seq__37592_37902 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37594_37903 = null;
var count__37595_37904 = (0);
var i__37596_37905 = (0);
while(true){
if((i__37596_37905 < count__37595_37904)){
var map__37605_37906 = chunk__37594_37903.cljs$core$IIndexed$_nth$arity$2(null,i__37596_37905);
var map__37605_37907__$1 = cljs.core.__destructure_map(map__37605_37906);
var task_37908 = map__37605_37907__$1;
var fn_str_37909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37605_37907__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37605_37907__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37911 = goog.getObjectByName(fn_str_37909,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37910)].join(''));

(fn_obj_37911.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37911.cljs$core$IFn$_invoke$arity$2(path,new_link_37901) : fn_obj_37911.call(null,path,new_link_37901));


var G__37912 = seq__37592_37902;
var G__37913 = chunk__37594_37903;
var G__37914 = count__37595_37904;
var G__37915 = (i__37596_37905 + (1));
seq__37592_37902 = G__37912;
chunk__37594_37903 = G__37913;
count__37595_37904 = G__37914;
i__37596_37905 = G__37915;
continue;
} else {
var temp__5804__auto___37916 = cljs.core.seq(seq__37592_37902);
if(temp__5804__auto___37916){
var seq__37592_37917__$1 = temp__5804__auto___37916;
if(cljs.core.chunked_seq_QMARK_(seq__37592_37917__$1)){
var c__5568__auto___37918 = cljs.core.chunk_first(seq__37592_37917__$1);
var G__37919 = cljs.core.chunk_rest(seq__37592_37917__$1);
var G__37920 = c__5568__auto___37918;
var G__37921 = cljs.core.count(c__5568__auto___37918);
var G__37922 = (0);
seq__37592_37902 = G__37919;
chunk__37594_37903 = G__37920;
count__37595_37904 = G__37921;
i__37596_37905 = G__37922;
continue;
} else {
var map__37608_37924 = cljs.core.first(seq__37592_37917__$1);
var map__37608_37925__$1 = cljs.core.__destructure_map(map__37608_37924);
var task_37926 = map__37608_37925__$1;
var fn_str_37927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37608_37925__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37608_37925__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37929 = goog.getObjectByName(fn_str_37927,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37928)].join(''));

(fn_obj_37929.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37929.cljs$core$IFn$_invoke$arity$2(path,new_link_37901) : fn_obj_37929.call(null,path,new_link_37901));


var G__37930 = cljs.core.next(seq__37592_37917__$1);
var G__37931 = null;
var G__37932 = (0);
var G__37933 = (0);
seq__37592_37902 = G__37930;
chunk__37594_37903 = G__37931;
count__37595_37904 = G__37932;
i__37596_37905 = G__37933;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37899);
});})(seq__37520_37894,chunk__37524_37895,count__37525_37896,i__37526_37897,seq__37337,chunk__37339,count__37340,i__37341,new_link_37901,path_match_37900,node_37899,path,map__37336,map__37336__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37900], 0));

goog.dom.insertSiblingAfter(new_link_37901,node_37899);


var G__37934 = seq__37520_37894;
var G__37935 = chunk__37524_37895;
var G__37936 = count__37525_37896;
var G__37937 = (i__37526_37897 + (1));
seq__37520_37894 = G__37934;
chunk__37524_37895 = G__37935;
count__37525_37896 = G__37936;
i__37526_37897 = G__37937;
continue;
} else {
var G__37938 = seq__37520_37894;
var G__37939 = chunk__37524_37895;
var G__37940 = count__37525_37896;
var G__37941 = (i__37526_37897 + (1));
seq__37520_37894 = G__37938;
chunk__37524_37895 = G__37939;
count__37525_37896 = G__37940;
i__37526_37897 = G__37941;
continue;
}
} else {
var G__37942 = seq__37520_37894;
var G__37943 = chunk__37524_37895;
var G__37944 = count__37525_37896;
var G__37945 = (i__37526_37897 + (1));
seq__37520_37894 = G__37942;
chunk__37524_37895 = G__37943;
count__37525_37896 = G__37944;
i__37526_37897 = G__37945;
continue;
}
} else {
var temp__5804__auto___37946 = cljs.core.seq(seq__37520_37894);
if(temp__5804__auto___37946){
var seq__37520_37947__$1 = temp__5804__auto___37946;
if(cljs.core.chunked_seq_QMARK_(seq__37520_37947__$1)){
var c__5568__auto___37948 = cljs.core.chunk_first(seq__37520_37947__$1);
var G__37949 = cljs.core.chunk_rest(seq__37520_37947__$1);
var G__37950 = c__5568__auto___37948;
var G__37951 = cljs.core.count(c__5568__auto___37948);
var G__37952 = (0);
seq__37520_37894 = G__37949;
chunk__37524_37895 = G__37950;
count__37525_37896 = G__37951;
i__37526_37897 = G__37952;
continue;
} else {
var node_37953 = cljs.core.first(seq__37520_37947__$1);
if(cljs.core.not(node_37953.shadow$old)){
var path_match_37954 = shadow.cljs.devtools.client.browser.match_paths(node_37953.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37954)){
var new_link_37955 = (function (){var G__37611 = node_37953.cloneNode(true);
G__37611.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37954),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37611;
})();
(node_37953.shadow$old = true);

(new_link_37955.onload = ((function (seq__37520_37894,chunk__37524_37895,count__37525_37896,i__37526_37897,seq__37337,chunk__37339,count__37340,i__37341,new_link_37955,path_match_37954,node_37953,seq__37520_37947__$1,temp__5804__auto___37946,path,map__37336,map__37336__$1,msg,updates,reload_info){
return (function (e){
var seq__37613_37956 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37615_37957 = null;
var count__37616_37958 = (0);
var i__37617_37959 = (0);
while(true){
if((i__37617_37959 < count__37616_37958)){
var map__37626_37960 = chunk__37615_37957.cljs$core$IIndexed$_nth$arity$2(null,i__37617_37959);
var map__37626_37961__$1 = cljs.core.__destructure_map(map__37626_37960);
var task_37962 = map__37626_37961__$1;
var fn_str_37963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626_37961__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626_37961__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37965 = goog.getObjectByName(fn_str_37963,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37964)].join(''));

(fn_obj_37965.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37965.cljs$core$IFn$_invoke$arity$2(path,new_link_37955) : fn_obj_37965.call(null,path,new_link_37955));


var G__37969 = seq__37613_37956;
var G__37970 = chunk__37615_37957;
var G__37971 = count__37616_37958;
var G__37972 = (i__37617_37959 + (1));
seq__37613_37956 = G__37969;
chunk__37615_37957 = G__37970;
count__37616_37958 = G__37971;
i__37617_37959 = G__37972;
continue;
} else {
var temp__5804__auto___37973__$1 = cljs.core.seq(seq__37613_37956);
if(temp__5804__auto___37973__$1){
var seq__37613_37974__$1 = temp__5804__auto___37973__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37613_37974__$1)){
var c__5568__auto___37975 = cljs.core.chunk_first(seq__37613_37974__$1);
var G__37976 = cljs.core.chunk_rest(seq__37613_37974__$1);
var G__37977 = c__5568__auto___37975;
var G__37978 = cljs.core.count(c__5568__auto___37975);
var G__37979 = (0);
seq__37613_37956 = G__37976;
chunk__37615_37957 = G__37977;
count__37616_37958 = G__37978;
i__37617_37959 = G__37979;
continue;
} else {
var map__37631_37981 = cljs.core.first(seq__37613_37974__$1);
var map__37631_37982__$1 = cljs.core.__destructure_map(map__37631_37981);
var task_37983 = map__37631_37982__$1;
var fn_str_37984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37631_37982__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37631_37982__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37988 = goog.getObjectByName(fn_str_37984,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37985)].join(''));

(fn_obj_37988.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37988.cljs$core$IFn$_invoke$arity$2(path,new_link_37955) : fn_obj_37988.call(null,path,new_link_37955));


var G__37989 = cljs.core.next(seq__37613_37974__$1);
var G__37990 = null;
var G__37991 = (0);
var G__37992 = (0);
seq__37613_37956 = G__37989;
chunk__37615_37957 = G__37990;
count__37616_37958 = G__37991;
i__37617_37959 = G__37992;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37953);
});})(seq__37520_37894,chunk__37524_37895,count__37525_37896,i__37526_37897,seq__37337,chunk__37339,count__37340,i__37341,new_link_37955,path_match_37954,node_37953,seq__37520_37947__$1,temp__5804__auto___37946,path,map__37336,map__37336__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37954], 0));

goog.dom.insertSiblingAfter(new_link_37955,node_37953);


var G__37993 = cljs.core.next(seq__37520_37947__$1);
var G__37994 = null;
var G__37995 = (0);
var G__37996 = (0);
seq__37520_37894 = G__37993;
chunk__37524_37895 = G__37994;
count__37525_37896 = G__37995;
i__37526_37897 = G__37996;
continue;
} else {
var G__37997 = cljs.core.next(seq__37520_37947__$1);
var G__37998 = null;
var G__37999 = (0);
var G__38000 = (0);
seq__37520_37894 = G__37997;
chunk__37524_37895 = G__37998;
count__37525_37896 = G__37999;
i__37526_37897 = G__38000;
continue;
}
} else {
var G__38001 = cljs.core.next(seq__37520_37947__$1);
var G__38002 = null;
var G__38003 = (0);
var G__38004 = (0);
seq__37520_37894 = G__38001;
chunk__37524_37895 = G__38002;
count__37525_37896 = G__38003;
i__37526_37897 = G__38004;
continue;
}
}
} else {
}
}
break;
}


var G__38005 = seq__37337;
var G__38006 = chunk__37339;
var G__38007 = count__37340;
var G__38008 = (i__37341 + (1));
seq__37337 = G__38005;
chunk__37339 = G__38006;
count__37340 = G__38007;
i__37341 = G__38008;
continue;
} else {
var G__38009 = seq__37337;
var G__38010 = chunk__37339;
var G__38011 = count__37340;
var G__38012 = (i__37341 + (1));
seq__37337 = G__38009;
chunk__37339 = G__38010;
count__37340 = G__38011;
i__37341 = G__38012;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37337);
if(temp__5804__auto__){
var seq__37337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37337__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37337__$1);
var G__38013 = cljs.core.chunk_rest(seq__37337__$1);
var G__38014 = c__5568__auto__;
var G__38015 = cljs.core.count(c__5568__auto__);
var G__38016 = (0);
seq__37337 = G__38013;
chunk__37339 = G__38014;
count__37340 = G__38015;
i__37341 = G__38016;
continue;
} else {
var path = cljs.core.first(seq__37337__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37637_38017 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37641_38018 = null;
var count__37642_38019 = (0);
var i__37643_38020 = (0);
while(true){
if((i__37643_38020 < count__37642_38019)){
var node_38021 = chunk__37641_38018.cljs$core$IIndexed$_nth$arity$2(null,i__37643_38020);
if(cljs.core.not(node_38021.shadow$old)){
var path_match_38023 = shadow.cljs.devtools.client.browser.match_paths(node_38021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38023)){
var new_link_38024 = (function (){var G__37701 = node_38021.cloneNode(true);
G__37701.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38023),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37701;
})();
(node_38021.shadow$old = true);

(new_link_38024.onload = ((function (seq__37637_38017,chunk__37641_38018,count__37642_38019,i__37643_38020,seq__37337,chunk__37339,count__37340,i__37341,new_link_38024,path_match_38023,node_38021,path,seq__37337__$1,temp__5804__auto__,map__37336,map__37336__$1,msg,updates,reload_info){
return (function (e){
var seq__37703_38025 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37705_38026 = null;
var count__37706_38027 = (0);
var i__37707_38028 = (0);
while(true){
if((i__37707_38028 < count__37706_38027)){
var map__37716_38029 = chunk__37705_38026.cljs$core$IIndexed$_nth$arity$2(null,i__37707_38028);
var map__37716_38030__$1 = cljs.core.__destructure_map(map__37716_38029);
var task_38031 = map__37716_38030__$1;
var fn_str_38032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37716_38030__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37716_38030__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38034 = goog.getObjectByName(fn_str_38032,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38033)].join(''));

(fn_obj_38034.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38034.cljs$core$IFn$_invoke$arity$2(path,new_link_38024) : fn_obj_38034.call(null,path,new_link_38024));


var G__38035 = seq__37703_38025;
var G__38036 = chunk__37705_38026;
var G__38037 = count__37706_38027;
var G__38038 = (i__37707_38028 + (1));
seq__37703_38025 = G__38035;
chunk__37705_38026 = G__38036;
count__37706_38027 = G__38037;
i__37707_38028 = G__38038;
continue;
} else {
var temp__5804__auto___38039__$1 = cljs.core.seq(seq__37703_38025);
if(temp__5804__auto___38039__$1){
var seq__37703_38040__$1 = temp__5804__auto___38039__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37703_38040__$1)){
var c__5568__auto___38041 = cljs.core.chunk_first(seq__37703_38040__$1);
var G__38042 = cljs.core.chunk_rest(seq__37703_38040__$1);
var G__38043 = c__5568__auto___38041;
var G__38044 = cljs.core.count(c__5568__auto___38041);
var G__38045 = (0);
seq__37703_38025 = G__38042;
chunk__37705_38026 = G__38043;
count__37706_38027 = G__38044;
i__37707_38028 = G__38045;
continue;
} else {
var map__37718_38046 = cljs.core.first(seq__37703_38040__$1);
var map__37718_38047__$1 = cljs.core.__destructure_map(map__37718_38046);
var task_38048 = map__37718_38047__$1;
var fn_str_38049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718_38047__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718_38047__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38051 = goog.getObjectByName(fn_str_38049,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38050)].join(''));

(fn_obj_38051.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38051.cljs$core$IFn$_invoke$arity$2(path,new_link_38024) : fn_obj_38051.call(null,path,new_link_38024));


var G__38052 = cljs.core.next(seq__37703_38040__$1);
var G__38053 = null;
var G__38054 = (0);
var G__38055 = (0);
seq__37703_38025 = G__38052;
chunk__37705_38026 = G__38053;
count__37706_38027 = G__38054;
i__37707_38028 = G__38055;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38021);
});})(seq__37637_38017,chunk__37641_38018,count__37642_38019,i__37643_38020,seq__37337,chunk__37339,count__37340,i__37341,new_link_38024,path_match_38023,node_38021,path,seq__37337__$1,temp__5804__auto__,map__37336,map__37336__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38023], 0));

goog.dom.insertSiblingAfter(new_link_38024,node_38021);


var G__38056 = seq__37637_38017;
var G__38057 = chunk__37641_38018;
var G__38058 = count__37642_38019;
var G__38059 = (i__37643_38020 + (1));
seq__37637_38017 = G__38056;
chunk__37641_38018 = G__38057;
count__37642_38019 = G__38058;
i__37643_38020 = G__38059;
continue;
} else {
var G__38060 = seq__37637_38017;
var G__38061 = chunk__37641_38018;
var G__38062 = count__37642_38019;
var G__38063 = (i__37643_38020 + (1));
seq__37637_38017 = G__38060;
chunk__37641_38018 = G__38061;
count__37642_38019 = G__38062;
i__37643_38020 = G__38063;
continue;
}
} else {
var G__38064 = seq__37637_38017;
var G__38065 = chunk__37641_38018;
var G__38066 = count__37642_38019;
var G__38067 = (i__37643_38020 + (1));
seq__37637_38017 = G__38064;
chunk__37641_38018 = G__38065;
count__37642_38019 = G__38066;
i__37643_38020 = G__38067;
continue;
}
} else {
var temp__5804__auto___38068__$1 = cljs.core.seq(seq__37637_38017);
if(temp__5804__auto___38068__$1){
var seq__37637_38069__$1 = temp__5804__auto___38068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37637_38069__$1)){
var c__5568__auto___38070 = cljs.core.chunk_first(seq__37637_38069__$1);
var G__38071 = cljs.core.chunk_rest(seq__37637_38069__$1);
var G__38072 = c__5568__auto___38070;
var G__38073 = cljs.core.count(c__5568__auto___38070);
var G__38074 = (0);
seq__37637_38017 = G__38071;
chunk__37641_38018 = G__38072;
count__37642_38019 = G__38073;
i__37643_38020 = G__38074;
continue;
} else {
var node_38076 = cljs.core.first(seq__37637_38069__$1);
if(cljs.core.not(node_38076.shadow$old)){
var path_match_38077 = shadow.cljs.devtools.client.browser.match_paths(node_38076.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38077)){
var new_link_38078 = (function (){var G__37724 = node_38076.cloneNode(true);
G__37724.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38077),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37724;
})();
(node_38076.shadow$old = true);

(new_link_38078.onload = ((function (seq__37637_38017,chunk__37641_38018,count__37642_38019,i__37643_38020,seq__37337,chunk__37339,count__37340,i__37341,new_link_38078,path_match_38077,node_38076,seq__37637_38069__$1,temp__5804__auto___38068__$1,path,seq__37337__$1,temp__5804__auto__,map__37336,map__37336__$1,msg,updates,reload_info){
return (function (e){
var seq__37729_38079 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37731_38080 = null;
var count__37732_38081 = (0);
var i__37733_38082 = (0);
while(true){
if((i__37733_38082 < count__37732_38081)){
var map__37739_38083 = chunk__37731_38080.cljs$core$IIndexed$_nth$arity$2(null,i__37733_38082);
var map__37739_38084__$1 = cljs.core.__destructure_map(map__37739_38083);
var task_38085 = map__37739_38084__$1;
var fn_str_38086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37739_38084__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37739_38084__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38088 = goog.getObjectByName(fn_str_38086,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38087)].join(''));

(fn_obj_38088.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38088.cljs$core$IFn$_invoke$arity$2(path,new_link_38078) : fn_obj_38088.call(null,path,new_link_38078));


var G__38089 = seq__37729_38079;
var G__38090 = chunk__37731_38080;
var G__38091 = count__37732_38081;
var G__38092 = (i__37733_38082 + (1));
seq__37729_38079 = G__38089;
chunk__37731_38080 = G__38090;
count__37732_38081 = G__38091;
i__37733_38082 = G__38092;
continue;
} else {
var temp__5804__auto___38094__$2 = cljs.core.seq(seq__37729_38079);
if(temp__5804__auto___38094__$2){
var seq__37729_38095__$1 = temp__5804__auto___38094__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37729_38095__$1)){
var c__5568__auto___38096 = cljs.core.chunk_first(seq__37729_38095__$1);
var G__38097 = cljs.core.chunk_rest(seq__37729_38095__$1);
var G__38098 = c__5568__auto___38096;
var G__38099 = cljs.core.count(c__5568__auto___38096);
var G__38100 = (0);
seq__37729_38079 = G__38097;
chunk__37731_38080 = G__38098;
count__37732_38081 = G__38099;
i__37733_38082 = G__38100;
continue;
} else {
var map__37742_38101 = cljs.core.first(seq__37729_38095__$1);
var map__37742_38102__$1 = cljs.core.__destructure_map(map__37742_38101);
var task_38103 = map__37742_38102__$1;
var fn_str_38104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742_38102__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742_38102__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38107 = goog.getObjectByName(fn_str_38104,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38105)].join(''));

(fn_obj_38107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38107.cljs$core$IFn$_invoke$arity$2(path,new_link_38078) : fn_obj_38107.call(null,path,new_link_38078));


var G__38108 = cljs.core.next(seq__37729_38095__$1);
var G__38109 = null;
var G__38110 = (0);
var G__38111 = (0);
seq__37729_38079 = G__38108;
chunk__37731_38080 = G__38109;
count__37732_38081 = G__38110;
i__37733_38082 = G__38111;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38076);
});})(seq__37637_38017,chunk__37641_38018,count__37642_38019,i__37643_38020,seq__37337,chunk__37339,count__37340,i__37341,new_link_38078,path_match_38077,node_38076,seq__37637_38069__$1,temp__5804__auto___38068__$1,path,seq__37337__$1,temp__5804__auto__,map__37336,map__37336__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38077], 0));

goog.dom.insertSiblingAfter(new_link_38078,node_38076);


var G__38112 = cljs.core.next(seq__37637_38069__$1);
var G__38113 = null;
var G__38114 = (0);
var G__38115 = (0);
seq__37637_38017 = G__38112;
chunk__37641_38018 = G__38113;
count__37642_38019 = G__38114;
i__37643_38020 = G__38115;
continue;
} else {
var G__38116 = cljs.core.next(seq__37637_38069__$1);
var G__38117 = null;
var G__38118 = (0);
var G__38119 = (0);
seq__37637_38017 = G__38116;
chunk__37641_38018 = G__38117;
count__37642_38019 = G__38118;
i__37643_38020 = G__38119;
continue;
}
} else {
var G__38120 = cljs.core.next(seq__37637_38069__$1);
var G__38121 = null;
var G__38122 = (0);
var G__38123 = (0);
seq__37637_38017 = G__38120;
chunk__37641_38018 = G__38121;
count__37642_38019 = G__38122;
i__37643_38020 = G__38123;
continue;
}
}
} else {
}
}
break;
}


var G__38124 = cljs.core.next(seq__37337__$1);
var G__38125 = null;
var G__38126 = (0);
var G__38127 = (0);
seq__37337 = G__38124;
chunk__37339 = G__38125;
count__37340 = G__38126;
i__37341 = G__38127;
continue;
} else {
var G__38128 = cljs.core.next(seq__37337__$1);
var G__38129 = null;
var G__38130 = (0);
var G__38131 = (0);
seq__37337 = G__38128;
chunk__37339 = G__38129;
count__37340 = G__38130;
i__37341 = G__38131;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37745){
var map__37746 = p__37745;
var map__37746__$1 = cljs.core.__destructure_map(map__37746);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37746__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37773){
var map__37774 = p__37773;
var map__37774__$1 = cljs.core.__destructure_map(map__37774);
var _ = map__37774__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37774__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37778,done,error){
var map__37779 = p__37778;
var map__37779__$1 = cljs.core.__destructure_map(map__37779);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37779__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37781,done,error){
var map__37782 = p__37781;
var map__37782__$1 = cljs.core.__destructure_map(map__37782);
var msg = map__37782__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37782__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37782__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37782__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37783){
var map__37784 = p__37783;
var map__37784__$1 = cljs.core.__destructure_map(map__37784);
var src = map__37784__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37784__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37788 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37788) : done.call(null,G__37788));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37789){
var map__37790 = p__37789;
var map__37790__$1 = cljs.core.__destructure_map(map__37790);
var msg__$1 = map__37790__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37791){var ex = e37791;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37792){
var map__37793 = p__37792;
var map__37793__$1 = cljs.core.__destructure_map(map__37793);
var env = map__37793__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37793__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37805){
var map__37806 = p__37805;
var map__37806__$1 = cljs.core.__destructure_map(map__37806);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37809){
var map__37813 = p__37809;
var map__37813__$1 = cljs.core.__destructure_map(map__37813);
var svc = map__37813__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37813__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
