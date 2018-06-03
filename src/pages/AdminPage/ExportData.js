import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setBooksAction } from '../../actions/books'
import { setLibrariesAction } from '../../actions/libraries'

class ExportData extends React.Component {
  exportToPdf = () => {
    const { books, libraries } = this.props
    const file = new Blob(
      [JSON.stringify({
        books,
        libraries
      })],
      { type: 'application/json' }
    )
    const tempLink = document.createElement('a')
    tempLink.href = URL.createObjectURL(file)
    tempLink.setAttribute('download', 'data.json')
    tempLink.click()
  }

  importFromPdf = (files) => {
    const { setBooks, setLibraries } = this.props;
    const fr = new FileReader()
    fr.onload = (e) => {
      const result = JSON.parse(e.target.result)
      setBooks(result.books)
      setLibraries(result.libraries)
    }
    fr.readAsText(files.target.files[0])
  }

  render () {
    return (
      <div>
        <Button onClick={this.exportToPdf}>Export to .json</Button>
        <label>Import from .json: <Input type="file" id="selectFiles" onChange={this.importFromPdf} /></label>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.resources,
  libraries: state.libraries.resources
})

const mapDispatchToProps = {
  setBooks: setBooksAction,
  setLibraries: setLibrariesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportData)
