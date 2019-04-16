/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$%', '$floor', '$/', '$debug', '$<=', '$>=', '$-']);
  return (function($base, $super, $parent_nesting) {
    function $EclipsePhase(){};
    var self = $EclipsePhase = $klass($base, $super, 'EclipsePhase', $EclipsePhase);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_EclipsePhase_initialize_1, TMP_EclipsePhase_gameName_2, TMP_EclipsePhase_gameType_3, TMP_EclipsePhase_getHelpMessage_4, TMP_EclipsePhase_check_1D100_5;

    
    
    Opal.defn(self, '$initialize', TMP_EclipsePhase_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_EclipsePhase_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_EclipsePhase_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_EclipsePhase_initialize_1, false), $zuper, $iter)
    }, TMP_EclipsePhase_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_EclipsePhase_gameName_2 = function $$gameName() {
      var self = this;

      return "エクリプス・フェイズ"
    }, TMP_EclipsePhase_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_EclipsePhase_gameType_3 = function $$gameType() {
      var self = this;

      return "EclipsePhase"
    }, TMP_EclipsePhase_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_EclipsePhase_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "1D100<=m 方式の判定で成否、クリティカル・ファンブルを自動判定\n"
    }, TMP_EclipsePhase_getHelpMessage_4.$$arity = 0);
    return (Opal.defn(self, '$check_1D100', TMP_EclipsePhase_check_1D100_5 = function $$check_1D100(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this, diceValue = nil, dice_ten_place = nil, dice_one_place = nil, diff_threshold = nil;

      
      if (signOfInequality['$==']("<=")) {
        } else {
        return ""
      };
      diceValue = total_n['$%'](100);
      dice_ten_place = $rb_divide(diceValue, 10).$floor();
      dice_one_place = diceValue['$%'](10);
      self.$debug("total_n", total_n);
      self.$debug("dice_ten_place, dice_one_place", dice_ten_place, dice_one_place);
      if (dice_ten_place['$=='](dice_one_place)) {
        
        if (diceValue['$=='](99)) {
          return " ＞ 決定的失敗"};
        if (diceValue['$=='](0)) {
          return " ＞ 00 ＞ 決定的成功"};
        if ($truthy($rb_le(total_n, diff))) {
          return " ＞ 決定的成功"};
        return " ＞ 決定的失敗";};
      diff_threshold = 30;
      if ($truthy($rb_le(total_n, diff))) {
        
        if ($truthy($rb_ge(total_n, diff_threshold))) {
          return " ＞ エクセレント"};
        return " ＞ 成功";
        } else {
        
        if ($truthy($rb_ge($rb_minus(total_n, diff), diff_threshold))) {
          return " ＞ シビア"};
        return " ＞ 失敗";
      };
    }, TMP_EclipsePhase_check_1D100_5.$$arity = 8), nil) && 'check_1D100';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
