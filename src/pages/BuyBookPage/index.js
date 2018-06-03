import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import QRCode from 'qrcode.react'
import { buyBookAction } from '../../actions/books'
import moment from 'moment'

class BuyBookPage extends React.Component {
  state = { search: '' }

  componentDidMount () {
    const { match, books } = this.props
    const book = books.find(item => item.id === Number(match.params.bookId))
    const library = book.libraries.find(item => item.value === Number(match.params.libraryId))
    if (library.status === 'free') {
      this.props.buyBook({ bookId: book.id, library: { ...library, status: 'booking', booking: +moment().add(5, 'm') } })
    }
  }

  render () {
    const { match } = this.props
    const qrData = JSON.stringify(match.params)
    return (
      <div>
        <Button as={Link} to='/'>Back</Button>
        <h2>Your qr code:</h2>
        <QRCode value={qrData} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.resources
})

const mapDispatchToProps = {
  buyBook: buyBookAction
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyBookPage)
