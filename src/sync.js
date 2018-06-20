const sketch = require('sketch/dom')

export default function(context) {
  const document = dom.getSelectedDocument()

  context.document.showMessage("Syncing...")

  console.log(sketch.fromNative(context.document))
}
