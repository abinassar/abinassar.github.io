"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[785],{785:(Z,p,r)=>{r.r(p),r.d(p,{PowerBudgetPageModule:()=>U});var g=r(6895),o=r(4719),t=r(9928),h=r(4781),f=r(5861),d=r(7347),e=r(5062),u=r(1391);function A(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"ion-row",8)(1,"ion-col",9)(2,"ion-checkbox",10),e.NdJ("ionChange",function(s){const S=e.CHM(n).index,v=e.oxw();return e.KtG(v.changedAntenna(s,S))}),e.qZA()(),e.TgZ(3,"ion-col")(4,"ion-accordion-group")(5,"ion-accordion")(6,"ion-item",11)(7,"ion-avatar",0),e._UZ(8,"img",12),e.qZA(),e.TgZ(9,"ion-label")(10,"h2"),e._uU(11),e.qZA(),e.TgZ(12,"p"),e._uU(13),e.qZA()()(),e.TgZ(14,"div",13)(15,"ion-grid")(16,"ion-row")(17,"ion-col"),e._uU(18," Frecuencia: "),e.qZA(),e.TgZ(19,"ion-col"),e._uU(20,"2"),e.qZA()()()()()()()()}if(2&i){const n=l.$implicit,a=l.index;e.xp6(1),e.Q6J("formGroupName",a),e.xp6(7),e.s9C("src",n.imgPath,e.LSH),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.AsE("",n.frecuency," Ghz, Ganancia: ",n.txAntennaGain,"")}}let L=(()=>{class i{constructor(n,a,s,c,S){this.modalCtrl=n,this.formBuilder=a,this.alertService=s,this.settingsService=c,this.navParams=S,this.antennaSelectedIndex=0,this.antennasList=d.PA}ngOnInit(){this.antennaName=this.navParams.get("antennaName"),console.log("this.antennaName ",this.antennaName),this.antennaSettingsForm=this.formBuilder.group({antennaSelected:this.formBuilder.array([])}),this.antennaSelected=this.antennaSettingsForm.get("antennaSelected"),this.antennasList.forEach(a=>{const s=this.formBuilder.group({checked:[a.checked]});this.antennaSelected.push(s)});let n=this.antennasList.findIndex(a=>a.name===this.antennaName);-1!==n?(this.antennaSelected.at(n).get("checked").setValue(!0),this.antennaSelectedIndex=n):(this.antennaSelected.at(0).get("checked").setValue(!0),this.antennaSelectedIndex=0)}cancel(){return this.modalCtrl.dismiss(null,"cancel")}confirm(){this.alertService.showLoading("Guardando datos del enlace...");let n=this.antennasList[this.antennaSelectedIndex],a=this.settingsService.linkSettings.antennaSelected;a.name=this.antennasList[this.antennaSelectedIndex].name,this.settingsService.SetUserLinkSettingsData("DSVlv21Tk8ZcPjwwvmrlzzMk2472",[{P1:this.settingsService.linkSettings.P1,P2:this.settingsService.linkSettings.P2,antennaOneHeight:this.settingsService.linkSettings.antennaOneHeight,antennaTwoHeight:this.settingsService.linkSettings.antennaTwoHeight,antennaSelected:a,atmosphericPressure:this.settingsService.linkSettings.atmosphericPressure,temperature:this.settingsService.linkSettings.temperature,waterDensity:this.settingsService.linkSettings.waterDensity,linkName:this.settingsService.linkSettings.linkName}]).subscribe(c=>(this.alertService.closeLoading(),this.modalCtrl.dismiss(n)),c=>{this.alertService.closeLoading(),this.alertService.presentAlert("Hubo un problema guadrando la configuracion","Por favor, intenta mas tarde").then(()=>this.modalCtrl.dismiss())})}changedAntenna(n,a){this.antennaSelected.at(this.antennaSelectedIndex).get("checked").setValue(!1),this.antennaSelectedIndex=a}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(t.IN),e.Y36(o.qu),e.Y36(u.c9),e.Y36(u.gb),e.Y36(t.X1))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-antenna-list"]],inputs:{antennaSelectedName:"antennaSelectedName"},decls:14,vars:2,consts:[["slot","start"],["color","medium",3,"click"],["slot","end"],[3,"click"],[1,"ion-padding"],[3,"formGroup"],[1,"ion-align-items-center","ion-justify-content-center"],["formArrayName","antennaSelected",4,"ngFor","ngForOf"],["formArrayName","antennaSelected"],["size","1",1,"m-auto",3,"formGroupName"],["formControlName","checked",3,"ionChange"],["slot","header","color","light"],[3,"src"],["slot","content",1,"ion-padding"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.NdJ("click",function(){return a.cancel()}),e._uU(4,"Cancel"),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6,"Selecci\xf3n de Antena"),e.qZA(),e.TgZ(7,"ion-buttons",2)(8,"ion-button",3),e.NdJ("click",function(){return a.confirm()}),e._uU(9,"Confirm"),e.qZA()()()(),e.TgZ(10,"ion-content",4)(11,"form",5)(12,"ion-grid",6),e.YNc(13,A,21,5,"ion-row",7),e.qZA()()()),2&n&&(e.xp6(11),e.Q6J("formGroup",a.antennaSettingsForm),e.xp6(2),e.Q6J("ngForOf",a.antennasList))},dependencies:[g.sg,t.We,t.eh,t.BJ,t.YG,t.Sm,t.nz,t.wI,t.W2,t.jY,t.Gu,t.Ie,t.Q$,t.Nd,t.sr,t.wd,t.w,o._Y,o.JJ,o.JL,o.sg,o.u,o.x0,o.CE],styles:[".m-auto[_ngcontent-%COMP%]{margin:auto}"]}),i})();var x=r(7666),_=r(7618);function k(i,l){if(1&i&&(e.TgZ(0,"ion-grid",10)(1,"ion-row",4)(2,"ion-col")(3,"h2"),e._uU(4," Potencia de Transmisi\xf3n - (dBm) "),e.qZA(),e.TgZ(5,"ion-item",4),e._UZ(6,"ion-input",11),e.qZA()(),e.TgZ(7,"ion-col")(8,"h2"),e._uU(9," Ganancia de la antena TX - (dBi) "),e.qZA(),e.TgZ(10,"ion-item",4),e._UZ(11,"ion-input",12),e.qZA()()(),e.TgZ(12,"ion-row",4)(13,"ion-col")(14,"h2"),e._uU(15," P\xe9rdidas de Transmisi\xf3n (cables, conectores, etc) - (dB) "),e.qZA(),e.TgZ(16,"ion-item",4),e._UZ(17,"ion-input",13),e.qZA()(),e.TgZ(18,"ion-col")(19,"h2"),e._uU(20," P\xe9rdidas de espacio libre - (dBm) "),e.qZA(),e.TgZ(21,"ion-item",4),e._UZ(22,"ion-input",14),e.qZA()()(),e.TgZ(23,"ion-row",4)(24,"ion-col")(25,"h2"),e._uU(26," Ganancia antena receptora - (dBi) "),e.qZA(),e.TgZ(27,"ion-item",4),e._UZ(28,"ion-input",15),e.qZA()(),e.TgZ(29,"ion-col")(30,"h2"),e._uU(31," Perdidas de recepcion (cable, conectores, etc) - (dB) "),e.qZA(),e.TgZ(32,"ion-item",4),e._UZ(33,"ion-input",16),e.qZA()()(),e.TgZ(34,"ion-row",4)(35,"ion-col")(36,"h2"),e._uU(37," Otras perdidas (Margen de desvanecimiento, desajuste de polarizaci\xf3n, etc) - (dB) "),e.qZA(),e.TgZ(38,"ion-item",4),e._UZ(39,"ion-input",17),e.qZA()()(),e.TgZ(40,"ion-row",18)(41,"ion-col",19)(42,"h1",20),e._uU(43," Presupuesto de potencia: "),e.qZA(),e.TgZ(44,"h2",21),e._uU(45),e.qZA()()(),e.TgZ(46,"ion-row",18)(47,"ion-col",19)(48,"h2"),e._uU(49," Sumario: "),e.qZA(),e.TgZ(50,"ul",22)(51,"li"),e._uU(52,"Prx: Potencia del receptor"),e.qZA(),e.TgZ(53,"li"),e._uU(54,"Ptx: Potencia del transmisor"),e.qZA(),e.TgZ(55,"li"),e._uU(56,"Gtx: Ganancia de la antena transmisora"),e.qZA(),e.TgZ(57,"li"),e._uU(58,"Ltx: P\xe9rdidas de transmisi\xf3n (Cable, conectores, etc)"),e.qZA(),e.TgZ(59,"li"),e._uU(60,"Lfs: P\xe9rdidas de espacio libre"),e.qZA(),e.TgZ(61,"li"),e._uU(62,"Lm: Otras p\xe9rdidas (Margen de desvanecimiento, desajuste de polarizaci\xf3n, etc)"),e.qZA(),e.TgZ(63,"li"),e._uU(64,"Lrx: P\xe9rdidas en el receptor (Cable, conectores, etc)"),e.qZA()()()(),e._UZ(65,"ion-row"),e.qZA()),2&i){const n=e.oxw();e.Q6J("formGroup",n.antennaForm),e.xp6(45),e.Ywz(" Prx = ",n.antennaForm.get("txPower").value," (Ptx) + ",n.antennaForm.get("txAntennaGain").value," (Gtx) - ",n.antennaForm.get("txLoss").value," (Ltx) - ",n.antennaForm.get("freeSpaceLoss").value," (Lfs) - ",n.antennaForm.get("miscLoss").value," (Lm) + ",n.antennaForm.get("rxAntennaGain").value," (Grx) - ",n.antennaForm.get("rxLoss").value," (Lrx) = ",n.powerAddition()," (dBm) ")}}const T=[{path:"",component:(()=>{class i{constructor(n,a,s,c,S,v){this.deviceOrientation=n,this.geolocation=a,this.formBuilder=s,this.modalController=c,this.settingsService=S,this.alertService=v,this.currentLocation=null,this.kaabaLocation={lat:21.42276,lng:39.8256687},this.qiblaLocation=0,this.showForm=!1,this.antennaSelected={name:"No Seleccionada",txAntennaGain:0,frecuency:0,maxDistanceKm:"",imgPath:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",checked:!1},this.antennasList=d.PA,this.deviceOrientation.watchHeading().subscribe(m=>{if(this.data=m,this.currentLocation){const P=m.magneticHeading-this.getQiblaPosition();this.qiblaLocation=P>360?P%360:P}}),this.deviceOrientation.watchHeading().subscribe(m=>{this.data=m}),this.geolocation.watchPosition().subscribe(m=>{this.currentLocation=m})}ionViewDidEnter(){this.getUserLinks()}navToAntennaList(){var n=this;return(0,f.Z)(function*(){const a=yield n.modalController.create({component:L,cssClass:"my-custom-class",componentProps:{antennaName:n.antennaSelected.name}});a.onDidDismiss().then(s=>{"cancel"!==s.role&&(n.antennaSelected.imgPath=s.data.imgPath,n.antennaSelected.name=s.data.name)}),yield a.present()})()}getUserLinks(){this.alertService.showLoading("Obteniendo datos del enlace..."),this.settingsService.getUserLinks("DSVlv21Tk8ZcPjwwvmrlzzMk2472").then(n=>{console.log("repsonse ",n);const a=n.linkSettings;this.alertService.closeLoading(),this.settingsService.linkSettings=a[0];let s=this.antennasList.findIndex(c=>c.name===this.settingsService.linkSettings.antennaSelected.name);-1!==s&&(this.antennaSelected.imgPath=this.antennasList[s].imgPath,this.antennaSelected.name=this.antennasList[s].name),this.setAntennaForm()}).catch(n=>{this.alertService.closeLoading(),this.setAntennaForm()})}saveLinkSettings(){if(this.antennaForm.valid){this.alertService.showLoading("Guardando datos del enlace...");let n={...this.settingsService.linkSettings.antennaSelected};n.txPower=this.antennaForm.get("txPower").value,n.txAntennaGain=this.antennaForm.get("txAntennaGain").value,n.txLoss=this.antennaForm.get("txLoss").value,n.freeSpaceLoss=this.antennaForm.get("freeSpaceLoss").value,n.miscLoss=this.antennaForm.get("miscLoss").value,n.rxAntennaGain=this.antennaForm.get("rxAntennaGain").value,n.rxLoss=this.antennaForm.get("rxLoss").value,this.settingsService.SetUserLinkSettingsData("DSVlv21Tk8ZcPjwwvmrlzzMk2472",[{P1:this.settingsService.linkSettings.P1,P2:this.settingsService.linkSettings.P2,antennaOneHeight:this.settingsService.linkSettings.antennaOneHeight,antennaTwoHeight:this.settingsService.linkSettings.antennaTwoHeight,antennaSelected:n,atmosphericPressure:this.settingsService.linkSettings.atmosphericPressure,temperature:this.settingsService.linkSettings.temperature,waterDensity:this.settingsService.linkSettings.waterDensity,linkName:this.settingsService.linkSettings.linkName}]).subscribe(s=>{this.alertService.closeLoading()},s=>{this.alertService.closeLoading(),this.alertService.presentAlert("Hubo un problema guadrando la configuracion","Por favor, intenta mas tarde")})}else this.antennaForm.markAllAsTouched(),this.alertService.presentAlert("Salvar configuraci\xf3n","Por favor completa los datos para poder guardar los datos del enlace")}powerAddition(){return this.antennaForm.get("txPower").value+this.antennaForm.get("txAntennaGain").value+this.antennaForm.get("txLoss").value+this.antennaForm.get("freeSpaceLoss").value+this.antennaForm.get("miscLoss").value+this.antennaForm.get("rxAntennaGain").value+this.antennaForm.get("rxLoss").value}setAntennaForm(){this.antennaForm=this.formBuilder.group({txPower:this.formBuilder.control(0===this.settingsService.linkSettings.antennaSelected.txPower?null:this.settingsService.linkSettings.antennaSelected.txPower,o.kI.required),txAntennaGain:this.formBuilder.control(0===this.settingsService.linkSettings.antennaSelected.txAntennaGain?null:this.settingsService.linkSettings.antennaSelected.txAntennaGain,o.kI.required),txLoss:this.formBuilder.control(0===this.settingsService.linkSettings.antennaSelected.txLoss?null:this.settingsService.linkSettings.antennaSelected.txLoss,o.kI.required),freeSpaceLoss:this.formBuilder.control(0===this.settingsService.linkSettings.antennaSelected.freeSpaceLoss?null:this.settingsService.linkSettings.antennaSelected.freeSpaceLoss,o.kI.required),miscLoss:this.formBuilder.control(0===this.settingsService.linkSettings.antennaSelected.miscLoss?null:this.settingsService.linkSettings.antennaSelected.miscLoss,o.kI.required),rxAntennaGain:this.formBuilder.control(0===this.settingsService.linkSettings.antennaSelected.rxAntennaGain?null:this.settingsService.linkSettings.antennaSelected.rxAntennaGain,o.kI.required),rxLoss:this.formBuilder.control(0===this.settingsService.linkSettings.antennaSelected.rxLoss?null:this.settingsService.linkSettings.antennaSelected.rxLoss,o.kI.required)}),this.showForm=!0}getQiblaPosition(){const n=this.degreeToRadian(this.currentLocation.coords.latitude),a=this.degreeToRadian(this.currentLocation.coords.longitude),s=this.degreeToRadian(this.kaabaLocation.lat),c=this.degreeToRadian(this.kaabaLocation.lng);return this.radianToDegree(Math.atan2(Math.sin(c-a),Math.cos(n)*Math.tan(s)-Math.sin(n)*Math.cos(c-a)))}radianToDegree(n){return 180*n/Math.PI}degreeToRadian(n){return n*Math.PI/180}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(x.h),e.Y36(_.b),e.Y36(o.qu),e.Y36(t.IN),e.Y36(u.gb),e.Y36(u.c9))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-power-budget"]],decls:26,vars:4,consts:[[1,"ion-padding",3,"fullscreen"],["size","12",1,"ion-justify-content-center","ion-align-self-center"],[3,"src"],[3,"click"],[1,"ion-padding"],[3,"formGroup",4,"ngIf"],["slot","fixed","vertical","bottom","horizontal","end"],["name","settings-outline"],["side","top"],["name","refresh"],[3,"formGroup"],["fill","outline","label","Latitud","labelPlacement","floating","placeholder","Ingresa valor","type","number","formControlName","txPower"],["fill","outline","label","Longitud","labelPlacement","floating","placeholder","Ingresa valor","type","number","formControlName","txAntennaGain"],["fill","outline","label","Latitud","labelPlacement","floating","placeholder","Ingresa valor","type","number","formControlName","txLoss"],["fill","outline","label","Latitud","labelPlacement","floating","placeholder","Ingresa valor","type","number","formControlName","freeSpaceLoss"],["fill","outline","label","Longitud","labelPlacement","floating","placeholder","Ingresa valor","type","number","formControlName","rxAntennaGain"],["fill","outline","label","Latitud","labelPlacement","floating","placeholder","Ingresa valor","type","number","formControlName","rxLoss"],["fill","outline","label","Latitud","labelPlacement","floating","placeholder","Ingresa valor","type","number","formControlName","miscLoss"],[1,"ion-justify-content-center","ion-align-self-center"],[1,"power-budget-result"],[1,"text-center"],[1,"text-center","mt-10px"],[1,"mt-10px"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Presupuesto de potencia"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"ion-row",1)(6,"ion-avatar"),e._UZ(7,"img",2),e.qZA()(),e.TgZ(8,"ion-row",1)(9,"h2"),e._uU(10),e.qZA()(),e.TgZ(11,"ion-row",1)(12,"ion-button",3),e.NdJ("click",function(){return a.navToAntennaList()}),e._uU(13," Cambiar "),e.qZA()(),e.TgZ(14,"ion-card",4)(15,"ion-card-header")(16,"ion-card-title"),e._uU(17,"Presupuesto de potencia:"),e.qZA()(),e.TgZ(18,"ion-card-content"),e.YNc(19,k,66,9,"ion-grid",5),e.qZA()()(),e.TgZ(20,"ion-fab",6)(21,"ion-fab-button"),e._UZ(22,"ion-icon",7),e.qZA(),e.TgZ(23,"ion-fab-list",8)(24,"ion-fab-button",3),e.NdJ("click",function(){return a.saveLinkSettings()}),e._UZ(25,"ion-icon",9),e.qZA()()()),2&n&&(e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(3),e.s9C("src",a.antennaSelected.imgPath,e.LSH),e.xp6(3),e.hij(" Antena seleccionada: ",a.antennaSelected.name," "),e.xp6(9),e.Q6J("ngIf",a.showForm))},dependencies:[g.O5,o.JJ,o.JL,t.BJ,t.YG,t.PM,t.FN,t.Zi,t.Dq,t.wI,t.W2,t.IJ,t.W4,t.zq,t.jY,t.Gu,t.gu,t.pK,t.Ie,t.Nd,t.sr,t.wd,t.as,o.sg,o.u],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: translucent}.power-budget-result[_ngcontent-%COMP%]{padding:40px;background-color:#7d7f7d;border-radius:5px;margin-top:10px;color:#000}.power-budget-result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:1.5em!important}"]}),i})()},{path:"antenna-list",component:L}];let b=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(T),h.Bz]}),i})();var w=r(4466),C=r(643);let F=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,t.Pc,o.UX]}),i})(),U=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[C.E],imports:[g.ez,o.u5,t.Pc,b,w.m,o.UX,F]}),i})()},4466:(Z,p,r)=>{r.d(p,{m:()=>f});var g=r(6895),o=r(9928),t=r(643),h=r(5062);let f=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=h.oAB({type:d}),d.\u0275inj=h.cJS({providers:[t.E],imports:[g.ez,o.Pc]}),d})()}}]);