import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReactFilestack from 'filestack-react'
import Select from 'react-select'
import Auth from '../../lib/Auth'

const options = {
  accept: 'image/*',
  transformations: {
    crop: true,
    circle: true,
    rotate: true
  }
}

const typeOptions = [
  { value: 'Primary School', label: 'Primary School' },
  { value: 'Secondary School', label: 'Secondary School' }
]

const areaOptions = [
  { value: 'Greater London', label: 'Greater London' },
  { value: 'Northen Ireland', label: 'Northen Ireland' },
  { value: 'Scotland', label: 'Scotland' },
  { value: 'Wales', label: 'Wales' },
  { value: 'North East', label: 'North East' },
  { value: 'North West', label: 'North West' },
  { value: 'Yorkshire and the Humber', label: 'Yorkshire and the Humber' },
  { value: 'West Midlands', label: 'West Midlands' },
  { value: 'East Midlands', label: 'East Midlands' },
  { value: 'South West', label: 'South West' },
  { value: 'South East', label: 'South East' },
  { value: 'East of England', label: 'East of England' }
]

class ProfileEdit extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeMulti = this.handleChangeMulti.bind(this)
  }

  componentDidMount() {
    const token = Auth.getToken()
    axios.get('/api/profile/', { headers: { Authorization: `Bearer ${token}`} })
      .then(res => this.setState({ formData: res.data }))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleChangeMulti(selectedOption, data) {
    console.log(selectedOption.value, data.name)
    const formData = { ...this.state.formData, [data.name]: selectedOption.value }
    this.setState({ formData })
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.put('/api/profile/', this.state.formData, { headers: { Authorization: `Bearer ${token}`} })
      .then(res => {
        toast.success(res.data.message)
        this.props.history.push('/profile')
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }

  handleUploadImages(result) {
    const formData = {...this.state.formData, image: result.filesUploaded[0].url}
    this.setState({ formData })
  }

  render() {
    console.log(this.state.formData)
    return (
      <section className="section">
        <div className="container">
          <div className="column is-half is-offset-one-quarter">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    name="first_name"
                    placeholder="eg: Miguel"
                    value={this.state.formData.first_name}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.name && <small className="help">{this.state.errors.name}</small>}
              </div>
              <div className="field">
                <label className="label">Surname</label>
                <div className="control">
                  <input
                    className="input"
                    name="last_name"
                    placeholder="eg: Angelo"
                    value={this.state.formData.last_name}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.surname && <small className="help">{this.state.errors.surname}</small>}
              </div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    name="username"
                    placeholder="eg: MathsTeacher"
                    value={this.state.formData.username}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.username && <small className="help">{this.state.errors.username}</small>}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="eg: MathsTeacher@ga.com"
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
              </div>
              <div className="field">
                <label className="label">Type</label>
                <Select
                  name="type"
                  options={typeOptions}
                  value={typeOptions.find(option => option.value === this.state.formData.type)}
                  onChange={this.handleChangeMulti}
                />
                {this.state.errors.type && <small className="help">{this.state.errors.type}</small>}
              </div>
              <div className="field">
                <label className="label">Area</label>
                <Select
                  name="area"
                  options={areaOptions}
                  value={areaOptions.find(option => option.value === this.state.formData.area)}
                  onChange={this.handleChangeMulti}
                />
                {this.state.errors.username && <small className="help">{this.state.errors.username}</small>}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="eg: ••••••••"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password_confirmation"
                    placeholder="eg: ••••••••"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.password_confirmation && <small className="help is-danger">{this.state.errors.password_confirmation}</small>}
              </div>
              <div className="field">
                <label className="label">Image</label>

                <ReactFilestack
                  apikey= {process.env.REGISTER_KEY}
                  buttonText="Upload Photo"
                  buttonClass="button"
                  className="upload-image"
                  options={options}
                  onSuccess={(result) => this.handleUploadImages(result)}
                  preload={true}
                />
                {this.state.formData.image &&
                  <figure className="image is-128x128">
                    <img className="is-rounded" src={this.state.formData.image} />
                    <br/>
                  </figure>

                }
              </div>
              <button className="button">Submit</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default ProfileEdit
