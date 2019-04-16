/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $gvars = Opal.gvars, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$===', '$to_i', '$[]', '$getTableInfoFromExtraTableText', '$getTableCommandResult', '$nil?', '$setPrefixes', '$+', '$keys']);
  return (function($base, $super, $parent_nesting) {
    function $KurayamiCrying(){};
    var self = $KurayamiCrying = $klass($base, $super, 'KurayamiCrying', $KurayamiCrying);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_KurayamiCrying_initialize_1, TMP_KurayamiCrying_gameName_2, TMP_KurayamiCrying_gameType_3, TMP_KurayamiCrying_getHelpMessage_4, TMP_KurayamiCrying_rollDiceCommand_5, $a;

    
    
    Opal.defn(self, '$initialize', TMP_KurayamiCrying_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_KurayamiCrying_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_KurayamiCrying_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_KurayamiCrying_initialize_1, false), $zuper, $iter)
    }, TMP_KurayamiCrying_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_KurayamiCrying_gameName_2 = function $$gameName() {
      var self = this;

      return "クラヤミクライン"
    }, TMP_KurayamiCrying_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_KurayamiCrying_gameType_3 = function $$gameType() {
      var self = this;

      return "KurayamiCrying"
    }, TMP_KurayamiCrying_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_KurayamiCrying_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "・アクシデント表（ACT）\n"
    }, TMP_KurayamiCrying_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_KurayamiCrying_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, self = this, $case = nil, number = nil, info = nil, name = nil, table = nil, text = nil, result = nil;

      
      $case = command;
      if (/^ACT(\d+)$/i['$===']($case)) {
      number = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i();
      info = (($a = $KurayamiCrying.$$cvars['@@tables']) == null ? nil : $a)['$[]']("ACT");
      name = info['$[]']("name");
      table = self.$getTableInfoFromExtraTableText(info['$[]']("table"));
      text = table['$[]'](number);
      result = "" + (name) + "(" + (number) + ") ＞ " + (text);
      return text;};
      result = self.$getTableCommandResult(command, (($a = $KurayamiCrying.$$cvars['@@tables']) == null ? nil : $a));
      if ($truthy(result['$nil?']())) {
        return nil
        } else {
        return result
      };
    }, TMP_KurayamiCrying_rollDiceCommand_5.$$arity = 1);
    (Opal.class_variable_set($KurayamiCrying, '@@tables', $hash2(["ACT"], {"ACT": $hash2(["name", "type", "table"], {"name": "アクシデント表", "type": "1D10", "table": "" + "頭の中が黒く染まってゆく、怖い、苦しい。気持ち悪い！でも…なんだか少しだけ、すがすがしい。あなたは「発狂」する。すでに「発狂」している場合、「理性」を2点失う。\n" + "待って、今のはナシ！調子が愚かったっていうか、ちょっと違うことしちゃったからさ…もう1回やらせてよ、ね？失敗した「判定」を再度やり直す。ただし、前回と同じ「能力値」を使うことはできす、進行役と「交渉」を行った扱いとなる（代替判定により「浸食」が2点増加する）。\n" + "こっちは必死にやってるってのに、まったく、アイツめ……！ あなたが「ツナガリ」を結んでいる主人公を任意に1人選び、「感情」を変更する。この際、必す「負の惑情」を選ばなければならない。「ツナガリ」を結んでいる主人公がいない場合、ダイスを振り直し、再度「アクシデント表」に当てはめる。\n" + "不意を突かれたあなたは、とっさに化物を攻撃する！……確かに化物に見えたのだ。しかし、あなたが手にかけたのは見知った顔だった。あなたが正の「ツナガリ」を結んでいる主人公をランダムに1人選び、2点のダメージを与える。正の「ツナガリ」を結んでいる主人公がいない場合、ダイスを振り直し、再度「アクシデント表」に当てはめる。\n" + "さっきからずっと、不気味な視線を感じる……どうやら、良くない存在に目をつけられてしまったようだ。「怪異」があなたに一方的な「ツナガリ」を獲得する。すでに「怪異」から「ツナガリ」を獲得されている場合、ダイスを振り直し、再度「アクシデント表」に当てはめる。\n" + "ぶつんと頭の中で音がする。あれっ？誰かのことを考えていたような……なんだか記憶が霞んで、思い出せない。あなたが獲得している「ツナガリ」をランダムに1つ失う（「継続的なツナガリ」である場合、セッション終了後に再度獲得する）。「ツナガリ」が1つもない場合、ダイスを振り直し、再度「アクシデント表」に当てはめる。\n" + "ぞわりと背中に懇寒が走る。自分を取り巻く「流れ」──運命に似た何かが歪んでしまったような、おぞましい予感が胸を走る。「確保」しているダイスの目が「10」になる。ダイスを「確保」していない場合、新たに「10」を「確保」する。すでに「10」の目を「確保」している場合、ダイスを振り直し、再度「アクシデント表」に当てはめる。\n" + "違う……違う、違う。これは自分のせいじゃない。いや、きっと何かの間違いだ。そう、あいつのせいに決まってる！進行役があなた以外の主人公をランダムに1人選ぷ（誰を選んだか参加者に教えてはならない） 。選ばれた主人公が次に判定を行った際、進行役は、最も低い数字を示しているダイスの目を「10」に変更する。\n" + "あぁ……見つからない。アレがないとダメなのに。一体どうしたら──！「アイテム」をランダムに1つ失う（「継続品」である場合、センョン終了後に再度獲得する）。「アイテム」を1つも所持していない場合、「アイテム」を所持する主人公をランダムに1人選び、2点のダメージを与え、「アイテム」を1つ奪い取る。主人公が誰も「アイテム」を所持していない場合、「理性」を2点失う。\n" + "まるで自分を支える何かが失われたように、あなたはその場に立ち尽くす。諦めと絶望が心を支配する。ああ、そうか。これが、「心が折れる」ということか……。あなたは「理性」を4点失う。\n"})})));
    return self.$setPrefixes($rb_plus(["ACT.*"], (($a = $KurayamiCrying.$$cvars['@@tables']) == null ? nil : $a).$keys()));
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
