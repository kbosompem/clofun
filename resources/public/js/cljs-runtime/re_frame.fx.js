goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__50116 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__50117 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__50117);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___50221 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___50221)){
var new_db_50222 = temp__5804__auto___50221;
var fexpr__50119_50223 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__50119_50223.cljs$core$IFn$_invoke$arity$1 ? fexpr__50119_50223.cljs$core$IFn$_invoke$arity$1(new_db_50222) : fexpr__50119_50223.call(null,new_db_50222));
} else {
}

var seq__50120 = cljs.core.seq(effects_without_db);
var chunk__50121 = null;
var count__50122 = (0);
var i__50123 = (0);
while(true){
if((i__50123 < count__50122)){
var vec__50146 = chunk__50121.cljs$core$IIndexed$_nth$arity$2(null,i__50123);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50146,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50146,(1),null);
var temp__5802__auto___50224 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___50224)){
var effect_fn_50225 = temp__5802__auto___50224;
(effect_fn_50225.cljs$core$IFn$_invoke$arity$1 ? effect_fn_50225.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_50225.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__50226 = seq__50120;
var G__50227 = chunk__50121;
var G__50228 = count__50122;
var G__50229 = (i__50123 + (1));
seq__50120 = G__50226;
chunk__50121 = G__50227;
count__50122 = G__50228;
i__50123 = G__50229;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50120);
if(temp__5804__auto__){
var seq__50120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50120__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50120__$1);
var G__50230 = cljs.core.chunk_rest(seq__50120__$1);
var G__50231 = c__5568__auto__;
var G__50232 = cljs.core.count(c__5568__auto__);
var G__50233 = (0);
seq__50120 = G__50230;
chunk__50121 = G__50231;
count__50122 = G__50232;
i__50123 = G__50233;
continue;
} else {
var vec__50149 = cljs.core.first(seq__50120__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50149,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50149,(1),null);
var temp__5802__auto___50234 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___50234)){
var effect_fn_50236 = temp__5802__auto___50234;
(effect_fn_50236.cljs$core$IFn$_invoke$arity$1 ? effect_fn_50236.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_50236.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__50237 = cljs.core.next(seq__50120__$1);
var G__50238 = null;
var G__50239 = (0);
var G__50240 = (0);
seq__50120 = G__50237;
chunk__50121 = G__50238;
count__50122 = G__50239;
i__50123 = G__50240;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__49764__auto___50242 = re_frame.interop.now();
var duration__49765__auto___50243 = (end__49764__auto___50242 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49765__auto___50243,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__49764__auto___50242);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__50116);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___50244 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___50244)){
var new_db_50245 = temp__5804__auto___50244;
var fexpr__50152_50246 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__50152_50246.cljs$core$IFn$_invoke$arity$1 ? fexpr__50152_50246.cljs$core$IFn$_invoke$arity$1(new_db_50245) : fexpr__50152_50246.call(null,new_db_50245));
} else {
}

var seq__50153 = cljs.core.seq(effects_without_db);
var chunk__50154 = null;
var count__50155 = (0);
var i__50156 = (0);
while(true){
if((i__50156 < count__50155)){
var vec__50164 = chunk__50154.cljs$core$IIndexed$_nth$arity$2(null,i__50156);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50164,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50164,(1),null);
var temp__5802__auto___50247 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___50247)){
var effect_fn_50248 = temp__5802__auto___50247;
(effect_fn_50248.cljs$core$IFn$_invoke$arity$1 ? effect_fn_50248.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_50248.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__50249 = seq__50153;
var G__50250 = chunk__50154;
var G__50251 = count__50155;
var G__50252 = (i__50156 + (1));
seq__50153 = G__50249;
chunk__50154 = G__50250;
count__50155 = G__50251;
i__50156 = G__50252;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50153);
if(temp__5804__auto__){
var seq__50153__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50153__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50153__$1);
var G__50255 = cljs.core.chunk_rest(seq__50153__$1);
var G__50256 = c__5568__auto__;
var G__50257 = cljs.core.count(c__5568__auto__);
var G__50258 = (0);
seq__50153 = G__50255;
chunk__50154 = G__50256;
count__50155 = G__50257;
i__50156 = G__50258;
continue;
} else {
var vec__50168 = cljs.core.first(seq__50153__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50168,(1),null);
var temp__5802__auto___50259 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___50259)){
var effect_fn_50260 = temp__5802__auto___50259;
(effect_fn_50260.cljs$core$IFn$_invoke$arity$1 ? effect_fn_50260.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_50260.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__50261 = cljs.core.next(seq__50153__$1);
var G__50262 = null;
var G__50263 = (0);
var G__50264 = (0);
seq__50153 = G__50261;
chunk__50154 = G__50262;
count__50155 = G__50263;
i__50156 = G__50264;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__50173){
var map__50175 = p__50173;
var map__50175__$1 = cljs.core.__destructure_map(map__50175);
var effect = map__50175__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50175__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50175__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__50183 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__50184 = null;
var count__50185 = (0);
var i__50186 = (0);
while(true){
if((i__50186 < count__50185)){
var effect = chunk__50184.cljs$core$IIndexed$_nth$arity$2(null,i__50186);
re_frame.fx.dispatch_later(effect);


var G__50266 = seq__50183;
var G__50267 = chunk__50184;
var G__50268 = count__50185;
var G__50269 = (i__50186 + (1));
seq__50183 = G__50266;
chunk__50184 = G__50267;
count__50185 = G__50268;
i__50186 = G__50269;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50183);
if(temp__5804__auto__){
var seq__50183__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50183__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50183__$1);
var G__50271 = cljs.core.chunk_rest(seq__50183__$1);
var G__50272 = c__5568__auto__;
var G__50273 = cljs.core.count(c__5568__auto__);
var G__50274 = (0);
seq__50183 = G__50271;
chunk__50184 = G__50272;
count__50185 = G__50273;
i__50186 = G__50274;
continue;
} else {
var effect = cljs.core.first(seq__50183__$1);
re_frame.fx.dispatch_later(effect);


var G__50275 = cljs.core.next(seq__50183__$1);
var G__50276 = null;
var G__50277 = (0);
var G__50278 = (0);
seq__50183 = G__50275;
chunk__50184 = G__50276;
count__50185 = G__50277;
i__50186 = G__50278;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__50188 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__50189 = null;
var count__50190 = (0);
var i__50191 = (0);
while(true){
if((i__50191 < count__50190)){
var vec__50198 = chunk__50189.cljs$core$IIndexed$_nth$arity$2(null,i__50191);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50198,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50198,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___50279 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___50279)){
var effect_fn_50280 = temp__5802__auto___50279;
(effect_fn_50280.cljs$core$IFn$_invoke$arity$1 ? effect_fn_50280.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_50280.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__50281 = seq__50188;
var G__50282 = chunk__50189;
var G__50283 = count__50190;
var G__50284 = (i__50191 + (1));
seq__50188 = G__50281;
chunk__50189 = G__50282;
count__50190 = G__50283;
i__50191 = G__50284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50188);
if(temp__5804__auto__){
var seq__50188__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50188__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50188__$1);
var G__50285 = cljs.core.chunk_rest(seq__50188__$1);
var G__50286 = c__5568__auto__;
var G__50287 = cljs.core.count(c__5568__auto__);
var G__50288 = (0);
seq__50188 = G__50285;
chunk__50189 = G__50286;
count__50190 = G__50287;
i__50191 = G__50288;
continue;
} else {
var vec__50201 = cljs.core.first(seq__50188__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50201,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50201,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___50289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___50289)){
var effect_fn_50290 = temp__5802__auto___50289;
(effect_fn_50290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_50290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_50290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__50293 = cljs.core.next(seq__50188__$1);
var G__50294 = null;
var G__50295 = (0);
var G__50296 = (0);
seq__50188 = G__50293;
chunk__50189 = G__50294;
count__50190 = G__50295;
i__50191 = G__50296;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__50208 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__50209 = null;
var count__50210 = (0);
var i__50211 = (0);
while(true){
if((i__50211 < count__50210)){
var event = chunk__50209.cljs$core$IIndexed$_nth$arity$2(null,i__50211);
re_frame.router.dispatch(event);


var G__50298 = seq__50208;
var G__50299 = chunk__50209;
var G__50300 = count__50210;
var G__50301 = (i__50211 + (1));
seq__50208 = G__50298;
chunk__50209 = G__50299;
count__50210 = G__50300;
i__50211 = G__50301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50208);
if(temp__5804__auto__){
var seq__50208__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50208__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50208__$1);
var G__50302 = cljs.core.chunk_rest(seq__50208__$1);
var G__50303 = c__5568__auto__;
var G__50304 = cljs.core.count(c__5568__auto__);
var G__50305 = (0);
seq__50208 = G__50302;
chunk__50209 = G__50303;
count__50210 = G__50304;
i__50211 = G__50305;
continue;
} else {
var event = cljs.core.first(seq__50208__$1);
re_frame.router.dispatch(event);


var G__50306 = cljs.core.next(seq__50208__$1);
var G__50307 = null;
var G__50308 = (0);
var G__50309 = (0);
seq__50208 = G__50306;
chunk__50209 = G__50307;
count__50210 = G__50308;
i__50211 = G__50309;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__50213 = cljs.core.seq(value);
var chunk__50214 = null;
var count__50215 = (0);
var i__50216 = (0);
while(true){
if((i__50216 < count__50215)){
var event = chunk__50214.cljs$core$IIndexed$_nth$arity$2(null,i__50216);
clear_event(event);


var G__50311 = seq__50213;
var G__50312 = chunk__50214;
var G__50313 = count__50215;
var G__50314 = (i__50216 + (1));
seq__50213 = G__50311;
chunk__50214 = G__50312;
count__50215 = G__50313;
i__50216 = G__50314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50213);
if(temp__5804__auto__){
var seq__50213__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50213__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50213__$1);
var G__50316 = cljs.core.chunk_rest(seq__50213__$1);
var G__50317 = c__5568__auto__;
var G__50318 = cljs.core.count(c__5568__auto__);
var G__50319 = (0);
seq__50213 = G__50316;
chunk__50214 = G__50317;
count__50215 = G__50318;
i__50216 = G__50319;
continue;
} else {
var event = cljs.core.first(seq__50213__$1);
clear_event(event);


var G__50321 = cljs.core.next(seq__50213__$1);
var G__50322 = null;
var G__50323 = (0);
var G__50324 = (0);
seq__50213 = G__50321;
chunk__50214 = G__50322;
count__50215 = G__50323;
i__50216 = G__50324;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
