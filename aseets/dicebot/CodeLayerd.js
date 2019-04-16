/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $gvars = Opal.gvars, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$debug', '$===', '$to_i', '$checkRoll', '$empty?', '$getValue', '$<', '$>', '$+', '$roll', '$sort', '$collect', '$split', '$join', '$getRollResultString', '$getSuccessInfo', '$getSuccessResultText', '$==', '$>=', '$each', '$<=']);
  return (function($base, $super, $parent_nesting) {
    function $CodeLayerd(){};
    var self = $CodeLayerd = $klass($base, $super, 'CodeLayerd', $CodeLayerd);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_CodeLayerd_gameName_1, TMP_CodeLayerd_gameType_2, TMP_CodeLayerd_getHelpMessage_3, TMP_CodeLayerd_isGetOriginalMessage_4, TMP_CodeLayerd_rollDiceCommand_5, TMP_CodeLayerd_checkRoll_7, TMP_CodeLayerd_getRollResultString_8, TMP_CodeLayerd_getSuccessResultText_9, TMP_CodeLayerd_getSuccessInfo_11, TMP_CodeLayerd_getValue_12;

    
    self.$setPrefixes(["\\d*CL[@\\d]*.*"]);
    
    Opal.defn(self, '$gameName', TMP_CodeLayerd_gameName_1 = function $$gameName() {
      var self = this;

      return "コード：レイヤード"
    }, TMP_CodeLayerd_gameName_1.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_CodeLayerd_gameType_2 = function $$gameType() {
      var self = this;

      return "CodeLayerd"
    }, TMP_CodeLayerd_gameType_2.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_CodeLayerd_getHelpMessage_3 = function $$getHelpMessage() {
      var self = this;

      return "" + "・行為判定（nCL@m） クリティカル・ファンブル判定あり\n" + "  n個のD10でmを判定値とした行為判定を行う。mは省略可能。（@6扱い）\n" + "  例）7CL>=5 ：サイコロ7個で判定値6のロールを行い、目標値5に対して判定\n" + "  例）4CL@7  ：サイコロ4個で判定値7のロールを行い達成値を出す\n"
    }, TMP_CodeLayerd_getHelpMessage_3.$$arity = 0);
    
    Opal.defn(self, '$isGetOriginalMessage', TMP_CodeLayerd_isGetOriginalMessage_4 = function $$isGetOriginalMessage() {
      var self = this;

      return true
    }, TMP_CodeLayerd_isGetOriginalMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_CodeLayerd_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, result = nil, $case = nil, base = nil, target = nil, diff = nil;

      
      self.$debug("rollDiceCommand command", command);
      result = "";
      $case = command;
      if (/(\d+)?CL(\@?(\d))?(>=(\d+))?/i['$===']($case)) {
      base = ($truthy($a = (($b = $gvars['~']) === nil ? nil : $b['$[]'](1))) ? $a : 1).$to_i();
      target = ($truthy($a = (($b = $gvars['~']) === nil ? nil : $b['$[]'](3))) ? $a : 6).$to_i();
      diff = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5)).$to_i();
      result = self.$checkRoll(base, target, diff);};
      if ($truthy(result['$empty?']())) {
        return nil};
      return "" + (command) + " ＞ " + (result);
    }, TMP_CodeLayerd_rollDiceCommand_5.$$arity = 1);
    
    Opal.defn(self, '$checkRoll', TMP_CodeLayerd_checkRoll_7 = function $$checkRoll(base, target, diff) {
      var $a, $b, TMP_6, self = this, result = nil, _ = nil, diceText = nil, diceList = nil;

      
      result = "";
      base = self.$getValue(base);
      target = self.$getValue(target);
      if ($truthy($rb_lt(base, 1))) {
        return result};
      if ($truthy($rb_gt(target, 10))) {
        target = 10};
      result = $rb_plus(result, "" + "(" + (base) + "d10)");
      $b = self.$roll(base, 10), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceList = $send(diceText.$split(/,/), 'collect', [], (TMP_6 = function(i){var self = TMP_6.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6)).$sort();
      result = $rb_plus(result, "" + " ＞ [" + (diceList.$join(",")) + "] ＞ ");
      result = $rb_plus(result, self.$getRollResultString(diceList, target, diff));
      return result;
    }, TMP_CodeLayerd_checkRoll_7.$$arity = 3);
    
    Opal.defn(self, '$getRollResultString', TMP_CodeLayerd_getRollResultString_8 = function $$getRollResultString(diceList, target, diff) {
      var $a, $b, self = this, successCount = nil, criticalCount = nil, successTotal = nil, result = nil, successText = nil;

      
      $b = self.$getSuccessInfo(diceList, target), $a = Opal.to_ary($b), (successCount = ($a[0] == null ? nil : $a[0])), (criticalCount = ($a[1] == null ? nil : $a[1])), $b;
      successTotal = $rb_plus(successCount, criticalCount);
      result = "";
      result = $rb_plus(result, "" + "判定値[" + (target) + "] 達成値[" + (successCount) + "]");
      if ($truthy($rb_gt(criticalCount, 0))) {
        result = $rb_plus(result, "" + "+クリティカル[" + (criticalCount) + "]=[" + (successTotal) + "]")};
      successText = self.$getSuccessResultText(successTotal, diff);
      result = $rb_plus(result, "" + " ＞ " + (successText));
      return result;
    }, TMP_CodeLayerd_getRollResultString_8.$$arity = 3);
    
    Opal.defn(self, '$getSuccessResultText', TMP_CodeLayerd_getSuccessResultText_9 = function $$getSuccessResultText(successTotal, diff) {
      var self = this;

      
      if (successTotal['$=='](0)) {
        return "ファンブル！"};
      if (diff['$=='](0)) {
        return "" + (successTotal)};
      if ($truthy($rb_ge(successTotal, diff))) {
        return "成功"};
      return "失敗";
    }, TMP_CodeLayerd_getSuccessResultText_9.$$arity = 2);
    
    Opal.defn(self, '$getSuccessInfo', TMP_CodeLayerd_getSuccessInfo_11 = function $$getSuccessInfo(diceList, target) {
      var TMP_10, self = this, successCount = nil, criticalCount = nil;

      
      self.$debug("checkSuccess diceList, target", diceList, target);
      successCount = 0;
      criticalCount = 0;
      $send(diceList, 'each', [], (TMP_10 = function(dice){var self = TMP_10.$$s || this;
if (dice == null) dice = nil;
      
        if ($truthy($rb_le(dice, target))) {
          successCount = $rb_plus(successCount, 1)};
        if (dice['$=='](1)) {
          return (criticalCount = $rb_plus(criticalCount, 1))
          } else {
          return nil
        };}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10));
      return [successCount, criticalCount];
    }, TMP_CodeLayerd_getSuccessInfo_11.$$arity = 2);
    return (Opal.defn(self, '$getValue', TMP_CodeLayerd_getValue_12 = function $$getValue(number) {
      var self = this;

      
      if ($truthy($rb_gt(number, 100))) {
        return 0};
      return number;
    }, TMP_CodeLayerd_getValue_12.$$arity = 1), nil) && 'getValue';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
