export default function(context) {
  context.document.showMessage("Opening Preview in Browser")
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("http://google.com"));
}
