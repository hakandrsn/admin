import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchScore } from "../../actions/score"
import Select from "react-select"
import { Controller, useForm } from 'react-hook-form'
import { fetchUsers } from "../../actions/user"
import date from "date-and-time"
import ax from '../../core/ax'

const AddPersonel = (props) => {
    const { control, formState: { errors } ,handleSubmit} = useForm()
    const [reload, setReload] = React.useState(false)
    const { id } = props.match.params
    const { users, score } = props
    useEffect(() => {
        props.fetchScore(id)
        props.fetchUsers()
    }, [reload])

    const formetterUser = () => {
        let newUsers = []
        users && users.forEach(user => {
            newUsers.push({
                label: user.firstname + " " + user.lastname,
                value: user._id,
                balance: user.balance,
                tc: user.tc
            })
        })
        return newUsers
    } 
    const onSubmit =async data => {
        const newData = []
        data.users && data.users.forEach(user => {
                newData.push({
                    fullname: user.label,
                    id: user.value,
                    balance: user.balance,
                    ["role"]: "garson"
                })

        })
        console.log(data.users)
        await ax.patch(`/api/score/add/${id}`,{users:newData,extraUsers:[]})
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label>Şirket seç   "Buraya eklenen personeller garson rolündedir"</label>
                <Controller
                    control={control}
                    name="users"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Select
                            inputRef={ref}
                            isMulti
                            closeMenuOnSelect={false}
                            options={formetterUser()}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.company && <p style={{ color: "tomato" }}>şirket seçim hatası</p>}

            </div>
            <input type="submit" />
            <div className='d-flex flex-column '>
                <label className='fs-4'>{score && score.companyName}</label>
                <label>{score && date.format(new Date(score.date),"DD/MM/YYYY")} Tarihinde</label>
                <label>{score && score.count} Kişi</label>
                <label>{score && score.hour} Saatinde</label>
                <label>{score && score.price} ₺ Veren şirket</label>


            </div>
        </form>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        score: state.scores[ownProps.match.params.id],
        users: Object.values(state.users)
    }
}

export default withRouter(connect(mapStateToProps, { fetchScore, fetchUsers })(AddPersonel))