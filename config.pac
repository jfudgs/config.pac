function FindProxyForURL(url, host) {

  if (!shExpMatch(url, "https://*") && !shExpMatch(url, "http://*")) return "DIRECT";
  
  var ExpList = [
  "player.vimeo.com",
  "mp.microsoft.com",
  "setup.icloud.com",
  "*.webex.com",
  "upgrade.bitdefender.com",
  "staticupdates.paloaltonetworks.com",
  "update.grisoft.com",
  "wustat.windows.com",
  "*.mcafee.com",
  "support.oracle.com",
  "*.mp.microsoft.com",
  "*.kaspersky.com",
  "*.cdn-apple.com",
  "apple.com",
  "*.tr.teams.microsoft.com",
  "liveupdate.symantecliveupdate.com",
  "cognito-idp.eu-central-1.amazonaws.com",
  "sophosupd.com",
  "sophos.com",
  "updates.oracle.com",
  "*.smartscreen-prod.microsoft.com",
  "update.symantec.com",
  "fpdownload.macromedia.com",
  "mzstatic.com",
  "play.google.com",
  "*.nai.com",
  "updates.paloaltonetworks.com",
  "fpdownload2.macromedia.com",
  "*.paloaltonetworks.com",
  "update.avg.com",
  "paloaltonetworks.com",
  "*.apple.com",
  "*.cdn.office.net",
  "*.relay.teams.microsoft.com",
  "*.mzstatic.com",
  "ggpht.com",
  "*.cognito-idp.eu-central-1.amazonaws.com",
  "*.emsisoft.com",
  "message.s2.spn.com",
  "liveupdate.symantec.com",
  "download.microsoft.com",
  "bitdefender.com",
  "*.symantecliveupdate.com",
  "p37-caldav.icloud.com",
  "sophosxl.net",
  "*.update.microsoft.com",
  "gs.apple.com",
  "update.microsoft.com",
  "mobile.twitter.com",
  "ftp.nai.com",
  "*.windowsupdate.com",
  "metrics.icloud.com",
  "ardownload.adobe.com",
  "kaspersky.com",
  "vimeo.com",
  "heartbeat.s2.spn.com",
  "ntservicepack.microsoft.com",
  "www.unicredit.it",
  "get.adobe.com",
  "aru-akam.oracle.com",
  "*.symantec.com",
  "macromedia.com",
  "*.itunes.apple.com",
  "emsisoft.com",
  "ardownload2.adobe.com",
  "android.clients.google.com",
  "update.fortiguard.net",
  "data.microsoft.com",
  "albert.apple.com",
  "*.oracle.com",
  "*.turn.teams.microsoft.com",
  "itunes.apple.com",
  "*.data.microsoft.com",
  "webex.com",
  "ws-ee-maidsvc.icloud.com",
  "download.windowsupdate.com",
  "ax.itunes.apple.com",
  "vpn-mi.dgsspa.com",
  "*.bitdefender.com",
  "windowsupdate.com",
  "update.nai.com",
  "smartscreen-prod.microsoft.com",
  "cdn-apple.com",
  "wns.windows.com",
  "windowsupdate.microsoft.com",
  "*.sls.microsoft.com",
  "gateway.icloud.com",
  "mcafee.com",
  "*.windows.com"
];
  for (var i=0; i<ExpList.length; i++) {
    if (shExpMatch(host, ExpList[i])) return  "DIRECT" ;
  }

  var proxy = "PROXY 10.255.2.254:13748; DIRECT";

  return proxy;

}