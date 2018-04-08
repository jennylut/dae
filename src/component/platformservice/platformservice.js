import React, { Component } from 'react';
import {$http, Qs, DateF, toFix} from '../../tools';
import Toast from '../../common/toast';

const params = Qs();

 export default class platformService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platformList:{}
    }
  }
  componentDidMount() {
    $http.post('/cashman-web/service/loan/users/loan-orders/platformcontract ', {
            "contractType": "PLATFORM_SERVICE_AGREEMENT",
            "trdLoanOrderId": params.loanId,
            "userId":params.userId
        }).then(res=>{
         if(res.data && res.code== "00"){
          this.setState({
            platformList: res.data || {}
          }, ()=>{
          });
         }else{
           /*Toast.show(res.message);*/
         }
      }, err => {
          /*Toast.show("error");*/
      });

  }

  render() {
    document.title = '平台服务协议';
    const {platformList} = this.state;
    /*console.log(this.state.platformList)*/
    const appName = params.appName;
    return (
      <div className="protocol-wrap bgf7">
        <h2>平台服务协议</h2>
        <p>编号：{platformList.loanOrderId}</p>
        <p>甲方： {platformList.companyTitle}</p>
        <p>乙方（借款人）:{platformList.realName}</p>
        <p>身份证号码：{platformList.maskIdCardNum}</p>
        <p>鉴于，甲方是一家在中国境内注册并经合法登记的公司；乙方为经甲方居间介绍，与出借人签订《借款（居间）协议》的借款人，出借人和借款人之间形成民间借贷关系。甲方、乙方经平等协商，根据《中华人民共和国民法通则》、《中华人民共和国合同法》及其他有关法律法规的规定订立本协议。</p>
        <h3>第一条 协议成立</h3>
        <p>乙方在甲方或甲方合作方平台上通过类似点击确认按钮后，本协议及附件一《授权扣款委托书》、附件二《法律文书送达地址确认书》即时成立并生效。本协议以数据电文的形式存储于甲方或甲方合作方服务器中，乙方对此予以确认并同意。</p>
        <h3>第二条 定义</h3>
        <p>除本协议另有规定外，本协议中下列用语的定义如下：</p>
        <p>1、借款（居间）协议：指乙方通过甲方平台签订的《借款（居间）协议》，《借款（居间）协议》与本协议同时签订；</p>
        <p>2、平台服务：指乙方同意甲方及其合作方对乙方在《借款（居间）协议》项下款项的获取与偿还进行相关管理并提供服务，包括但不限于媒介服务、贷后管理、逾期管理、提前结清等；</p>
        <p>3、出借人：指本条第一款《借款（居间）协议》项下的出借人；</p>
        <p>4、工作日：指除国家法定节假日、公休日以外的甲方对外办理业务的任何一日。</p>
        <h3>第三条 服务内容</h3>
        <p>一、居间服务</p>
        <p>甲方及甲方合作方为乙方提供居间服务并收取一定数额的综合服务费。</p>
        <p>1、媒介服务：甲方利用自有资源和平台优势，为乙方在甲方平台上发起的借款寻找合适出借人，促成双方签订《借款（居间）协议》，实现乙方获得出借人出借款项；甲方有权根据业务经营情况为乙方选择介绍合适出借人的合作方居间平台，乙方同意并授权甲方于借款起息日预先收取综合服务费，并在发放借款时即从本金金额中扣除。</p>
        <p>2、贷后管理：《借款（居间）协议》生效后，甲方对《借款（居间）协议》项下借款及乙方进行监督和督促，并有权收取分期服务费，贷后管理服务内容包括：</p>
        <p>（1）对乙方的履约情况、经营及财务状况等进行监督检查；</p>
        <p>（2）对乙方在《借款（居间）协议》项下的借款资金的使用情况进行监督检查；</p>
        <p>（3）督促乙方根据《借款（居间）协议》的约定按时还款；</p>
        <p>（4）与银行和/或第三方支付机构开展合作，对《借款（居间）协议》项下各类金额提供电子数据信息计算与统计，对法院需要认定的必要费用提供财务凭证。</p>
        <p>3、甲方无法也没有义务保证乙方在发出借款要约意向后，能够实际成功获得借款，由此可能导致的损失由乙方自行承担，甲方不承担任何责任。</p>
        <p>二、逾期管理</p>
        <p>乙方未能在《借款（居间）协议》任何一个还款日24：00前足额支付还款金额至乙方还款账户的，视作乙方逾期还款，甲方即对乙方的借款进行逾期管理，逾期管理服务及相关内容包括：</p>
        <p>1、依照各方其他协议使用保证金对逾期借款在约定范围内进行代偿；</p>
        <p>2、直接或间接向乙方发送通知进行款项追偿，包括但不限于以手机短信、电话、信函、电子邮件、网站通知或其他合法方式提醒或催告乙方履行《借款（居间）协议》项下的还款义务；</p>
        <p>3、逾期管理款项的范围包括但不限于本金、利息、综合服务费、逾期管理费等。</p>
        <p>4、乙方发生逾期还款的，自还款日后第1日起向甲方支付逾期管理费，至乙方全额支付应付款项为止。</p>
        <p>三、提前还款</p>
        <p>1、乙方可以发起提前还款服务申请，服务是否可用以操作界面展示为准（受银行结算等影响，部分日期可能无法发起申请）。</p>
        <p>2、乙方选择提前还款的：乙方应偿还按借款（居间）协议应还的全部款项。</p>
        <h3>第四条 费用</h3>
        <p>1、综合服务费：指乙方因甲方或其合作方所提供的媒介服务、贷后管理等服务向甲方支付的费用；甲方在借款起息日收取。（详见附表）</p>
        <p>2、逾期管理费：以逾期未还金额为基数按日收取，按照逾期未还金额计算，包括逾期未还本金、利息之和，以当日0:00至24:00为一日，丙方每日收取用户逾期未还金额的2%作为逾期管理费。</p>
        <p>3、其他甲方可能发生的，且须由乙方承担的费用，包括但不限于：</p>
        <p>（1）因代偿债务发生的税费；</p>
        <p>（2）诉讼、仲裁过程中支出的费用，包括法院、仲裁机构收取的费用等；</p>
        <p>（3）审计费、拍卖费、律师费等中介费用；</p>
        <p>（4）包括但不限于交通费、餐费等必要差旅费用。</p>
        <h3>第五条 服务期限</h3>
        <p>本协议项下服务期限自本协议生效之日起，至乙方在《借款（居间）协议》项下的所有义务全部履行完毕，以及乙方支付本协议项下的全部费用完毕之日止。</p>
        <h3>第六条 甲方的权利和义务</h3>
        <p>1、按照本协议约定向乙方提供服务；</p>
        <p>2、在本协议履行过程中，根据实际情况要求乙方予以相应配合或协助；</p>
        <p>3、对涉及本协议项下服务内容的行为进行监督、检查，有权要求乙方提供相关资料和文件，有权要求乙方对有关问题作出说明，有权要求乙方改正借款后出现的违约、违法行为；</p>
        <p>4、按照《借款（居间）协议》及本协议约定向乙方收取各项费用；</p>
        <p>5、甲方作为出借人的追偿权人（甲方代偿债务后），或作为乙方可能参加的诉讼或非诉程序的利害关系人，有权请求或委托律师请求乙方履行其他协议中的涉及出借人及甲方利益的义务。</p>
        <p>6、若乙方在出借人或甲方及其关联公司或甲方合作方处有任何应收或留存款项，出借人、甲方及其关联公司或甲方合作方有权直接自前述款项中扣划相应金额用以偿还乙方在《借款（居间）协议》项下所负欠款。</p>
        <h3>第七条 乙方的权利和义务</h3>
        <p>1、接受并配合甲方的各项服务行为；</p>
        <p>2、接受甲方的监督，向甲方提供甲方要求的相关资料和文件，并应如实向甲方通报自身的财务状况，及时改正借款后出现的违约、违法行为；</p>
        <p>3、在《借款（居间）协议》约定的借款到期日的24：00之前，偿还根据《借款（居间）协议》约定的还款金额，并委托甲方将借款本息支付给出借人；</p>
        <p>4、当甲方代乙方清偿《借款（居间）协议》项下的全部债务后，乙方应当及时足额向甲方清偿；</p>
        <p>5、未经甲方书面同意，不得转让本协议项下的任何权利义务；</p>
        <p>6、按照《借款（居间）协议》及本协议约定向甲方支付各类费用。</p>
        <h3>第八条 有关特别事项的约定</h3>
        <p>在本协议履行过程中，涉及到以下事项时，乙方应将其情况及时向甲方通报，在取得甲方的书面同意后方可进行相应处置：</p>
        <p>1、第三方为乙方承担全部或部分《借款（居间）协议》项下的债务的；</p>
        <p>2、乙方改变借款用途或发生重大变化的；</p>
        <p>3、乙方出现重大诉讼、财务情况严重恶化等可能危及贷后资产安全的情形的；</p>
        <p>4、乙方发生违反《借款（居间）协议》情形的；</p>
        <p>5、其它可能导致个人偿债能力减损的情形（如情势变更等）；</p>
        <p>6、其他经甲方与乙方协商一致应取得甲方书面同意方可实施的事项。</p>
        <p>7、为了甲方的信贷风险防控，也为了更好地为乙方提供服务，乙方同意并不可撤销地授权向甲方提供个人及亲属信息（包括但不限于身份信息、财产信息、信用信息、处罚诉讼信息）用于甲方及其关联合作方的风险评估、数据模型构建、债务催收等其他合法用途。甲方应对上述信息予以合理保护。</p>
        <h3>第九条 陈述和保证</h3>
        <p>1、甲方是合法登记设立的、符合中国法律规定的企业法人；并认可本协议生效即对甲方具有法律约束力；</p>
        <p>2、乙方承诺为善意、有权缔约的完全民事行为能力人，并认可本协议生效即对乙方具有法律约束力。</p>
        <h3>第十条 违约责任</h3>
        <p>因任何一方的违约行为给另一方造成损失的，应由违约方承担赔偿责任。</p>
        <h3>第十一条 协议的变更和解除</h3>
        <p>1、甲方有权不定期修改本合同，但相关修改不得加重乙方在贷款金额、费率和期限方面的责任。一旦条款产生变动，甲方将以包括并不限于电子信息等形式通知乙方。经修订的合同工一经通知，立即自动生效。乙方继续使用借款及平台服务的行为视为对合同修改内容的接受。如乙方不同意相关修改，应当于作出通知之日起5日内停止使用借款，并偿还所有应付款项。</p>
        <p>2、如遇国家法律、法规或政策变化，致使本协议的全部或部分条款不再符合国家法律、法规或政策的要求，甲方可根据相关变动修改有关条款；</p>
        <p>3、甲方或乙方由于不可抗力不能履行协议的，应及时通知对方并采取有效措施防止损失扩大。遭受不可抗力的一方应在事件发生后5个工作日内向对方提供该不可抗力事件的详细情况和有关政府部门出具的有关该不可抗力事件的发生及影响的证明文件。甲方和乙方应及时协商解决措施。乙方对《借款（居间）协议》及本协议的违反不属于不可抗力。</p>
        <h3>第十二条 保密和知识产权条款</h3>
        <p>1、未经甲方、乙方双方同意，任何一方不得向其他人（甲乙双方的雇员及其雇用的中介机构所涉及人员除外）透露本协议的内容，但依法应披露信息的情形除外；</p>
        <p>2、甲乙双方在借款项目中形成的知识产权属甲方所有。</p>
        <h3>第十三条 争议解决</h3>
        <p>双方在履行本协议过程中发生争议时，双方应协商处理；协商不成的，任一方应向甲方所在地上海市长宁区有管辖权的人民法院提起诉讼。</p>
        <h3>第十四条 其他事项</h3>
        <p>1、本协议经乙方在线点击类似确认的方式签订，本协议一经签署，即视为乙方向出借人发出不可撤销的借款要约</p>
        <p>2、双方均确认，本协议的签订、生效和履行以不违反法律为前提。如果本协议中的任何一条或多条违反适用的法律，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力；</p>
        <p>4、乙方委托甲方保管所有与本协议有关的书面文件或电子信息；</p>
        <p>5、本协议未尽事宜，由甲、乙双方协商处理，或者按国家有关法律、法规的规定执行；</p>
        <p>6、本协议的各项补充、修订或变更，包括本协议的附件、附录及补充协议，为本协议的完整组成部分；</p>
        <p>7、本协议中所使用的定义，除非另有规定，甲方享有解释权。</p>
        <p>（以下无正文）</p>
        <p>附表：</p>
        <ul className="protocol-ul">
            <li>
                <span>期数:</span>
                <span>{platformList.period}</span>
            </li>
             <li>
                <span>还款日:</span>
                <span>{platformList.loanEndTime}</span>
            </li>
             <li>
                <span>还款金额:</span>
                <span>{platformList.repaymentAmount}</span>
            </li>
             <li>
                <span>本金:</span>
                <span>{platformList.moneyAmount}</span>
            </li>
            {/* <li>
                <span>综合服务费:</span>
                <span>{platformList.interest}</span>
            </li>*/}
        </ul>
        <div className="contact-icon">
            <p>甲方： {platformList.companyTitle}</p>
            <p>乙方（借款人）：{platformList.realName}</p>
            <p>{platformList.loanTime}</p>
            <p>审核状态:{platformList.status} </p>
            <img src={appName == 'jsxjx'? require('../../images/contact_Icon.png'):require('../../images/contact_Icondk.png')} style={{display:JSON.stringify(this.state.platformList) == "{}"?'none': 'block'}} className="contact-img" alt=""/>
        </div>
        <h3>附件一：授权扣款委托书</h3>
        <p>授权人：{platformList.realName}</p>
        <p>被授权人：{platformList.companyTitle}</p>
        <p>授权人同意并签署本委托书，在此通过本委托书作出如下授权与承诺：  </p>
        <p>一、授权人同意并授权被授权人针对授权人通过使用被授权人或被授权人合作方运营的网络平台（以下简称“平台”）发起的所有借款项目（包括本委托书生效之前及其之后的借款项目，具体以授权人签订的各《借款（居间）协议》、《平台服务协议》为准），协同与被授权人或被授权人合作方合作的指定第三方银行或第三方支付机构（以下简称“被授权人指定第三方”）从授权人通过本委托书指定银行卡（银行卡账户信息见第十五条）进行资金的代扣、代还、代付及划转各《借款（居间）协议》、《平台服务协议》项下的应付款项。</p>
        <p>二、授权人同意，在各《借款（居间）协议》及《平台服务协议》生效后，被授权人及被授权人指定第三方有权依照各《借款（居间）协议》及《平台服务协议》约定的期限和金额代扣授权人指定银行卡账户中的相应资金。</p>
        <p>三、本委托书项下的应付款项包括但不限于授权人通过使用平台发起的全部借款相关款项，支付顺序依次：</p>
        <p>1、没有逾期的，还款顺序依次为利息、本金；</p>
        <p>2、选择提前结清的，需一次性偿还利息和本金；</p>
        <p>3、发生逾期时还款顺序依次为逾期管理费、利息、本金。</p>
        <p>四、授权人承诺，本委托书第十五条记载的授权银行卡账户是以本人真实姓名开立的合法、有效的银行卡账户，授权人同意本委托书第一条、第二条约定的资金代扣及转账优先于该账户其他任何用途的支付。</p>
        <p>五、授权人同意，在借款成功后，如因银行、第三方支付等任何原因导致被授权人及被授权人指定第三方无法将款项代还至授权指定的银行卡账户中，由此引起的任何后果，由授权人承担。</p>
        <p>六、授权人知悉被授权人及被授权人指定第三方对此项资金代扣、代还、代付及划转服务不收费，被授权人及被授权人指定第三方会尽其最大努力及时完成此项资金划转服务，但被授权人不对此项服务作任何永久性承诺。与本委托书项下的资金代扣、代还、代付及划转服务相关的任何责任，与被授权人及被授权人指定第三方无关，被授权人及被授权人指定第三方亦无义务承担。</p>
        <p>七、授权人在指定银行卡账户中必须留有足够余额，否则因账户余额不足或不可归责于被授权人的任何事由，导致无法及时扣款或扣款错误、失败，责任由授权人自行承担。余额不足的，授权人知悉并同意被授权人会就授权人全部应还款项持续进行代扣，直至授权人还清全部应还款项。</p>
        <p>八、各《借款（居间）协议》的出借人按照相关协议约定和平台规则转让各《借款（居间）协议》项下的债权的，不影响本委托书的有效性。</p>
        <p>九、授权人针对授权人指定的银行卡账户向被授权人进行授权后，即视为授权人就该银行卡在授权人通过平台发起的所有借款项目范围内进行了授权，不因授权人后续更换绑定银行卡，或对其他银行卡进行授权而无效或产生任何影响。</p>
        <p>十、本委托书为授权人对被授权人从其授权的指定账户中扣款和/或向该账户转账的授权证明，不作为收付现金的直接凭据。</p>
        <p>十一、凡本委托书中未约定的事项，适用各《借款（居间）协议》、《平台服务协议》的约定，凡本委托书中出现的与各《借款（居间）协议》、《平台服务协议》相同的词语或术语，如果在本委托书中无特别定义，适用各《借款（居间）协议》、《平台服务协议》中相同词语和术语的定义、涵义或解释，本委托书的规定与各《借款（居间）协议》、《平台服务协议》不一致的，以本委托书的规定为准。</p>
        <p>十二、授权人发起终止授权或变更账户、通讯地址时，在当期款项支付日2个工作日前通知被授权人并完成信息更新，否则自行承担所造成的风险损失。</p>
        <p>十三、授权人保证本委托书的真实性、合法性、有效性，被授权人依据本委托书进行的操作引起的一切法律纠纷或风险，由授权人独立承担或解决。</p>
        <p>十四、本委托书自授权人确认同意起生效，至授权人通过平台签订的全部《借款（居间）协议》、《平台服务协议》履行完毕，所有款项全部还清时终止。</p>
        <h3>附件二：《法律文书送达地址确认书》</h3>
        <p>1.本人同意与上海利全信息科技服务有限公司（以下简称“平台方”）在线订立的《平台服务协议》（以下简称“合同”），对于因合同引起的任何纠纷，本人声明司法机关（包括但不限于人民法院）可以用手机短信或电子邮件等现代通讯方式或邮寄方式向本人送达法律文书（包括诉讼文书）。</p>
        <p>2.本人指定接收法律文书的手机号码或者电子邮箱为合同约定的或注册账户绑定的手机号码或电子邮箱，司法机关向前述地址发出法律文书即视为送达。</p>
        <p>3.本人指定邮寄地址为本人在平台方或注册“极速现金侠”时使用的户籍地址或身份证地址。</p>
        <p>4.本人同意司法机关可采取以上一种或多种送达方式向本人送达法律文书，司法机关采取多种方式向本人送达法律文书，送达时间以上述送达方式中最先送达的为准。</p>
        <p>5.本人确认的上述送达方式适用于各个司法阶段，包括但不限于一审、二审、再审、执行以及督促程序（含支付令送达）。</p>
        <p>6.若本人上述送达地址有变更，本人应当及时告知平台方和司法机关（如适用）变更后的送达地址。</p>
        <p>7.本人已阅读本确认书所有条款，并保证上述送达地址是准确的、有效的；如果提供的送达地址不确切，或不及时告知变更后的地址，使法律文书无法送达或未及时送达，本人自行承担由此产生的法律后果。</p>
        <p>确认人：{platformList.realName}</p>
        <p>{platformList.loanTime}</p>
        <p>审核状态:{platformList.status} </p>
      
      </div>
    );
  }
}

