import React from 'react'
import { connect } from 'react-redux'

const ImagesView = ({ image }) => {
    const { images } = image
    return (
        <div>
            {(images !== null && images.length !== 0) ? <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col-4">Thumbnail</th>
      <th scope="col-2">Caption/Notes</th>
      <th scope="col-2">Latitude</th>
      <th scope="col-2">Longitude</th>
    </tr>
  </thead>
  <tbody>
  {images !== null && images.length !== 0 && images.map(image => (<tr>
      <td scope="col-4"> <img src={image.pic_url} className='w-25 img-fluid'/></td>
      <td scope="col-2">{image.notes}</td>
      <td scope="col-2">{image.lat}</td>
      <td scope="col-2">{image.lng}</td>
    </tr>))}
  </tbody>
</table> :
    <div className='text-center'>
        No Images Available
    </div>}
        </div>
    )
}

const mapStateToProps = state => ({
    image: state.image
})
export default connect(mapStateToProps, null) (ImagesView)
