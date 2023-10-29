import Styles from './PhotoForm.module.scss'
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { ReactElement, useState } from 'react';
type Props = {}

interface IFormInput {
    title: string;
    category: {};
    photo: string;
}
export default function PhotoForm({ }: Props) {
    const { register, handleSubmit, control, formState: { errors }, } = useForm<IFormInput>();
    const [imgShow, setImgShow] = useState(``)
    const handleClickRandom = async () => {
        let id = Math.floor(Math.random() * 2000)
        setImgShow(`https://picsum.photos/id/${id}/300/300`)
        // console.log(imgShow)
    }
    return (
        <form className={Styles.PhotoForm} onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="form-group">
                <label htmlFor="titleId">Title</label>
                <input type="text" className="form-control" id="titleId" placeholder="Wow nature..."
                    {...register('title', { required: true })} />
                {errors.title && <p>Title is required.</p>}
                <small id="textHelp" className="form-text text-muted">Share your emotions about the image</small>
            </div>
            <div className="form-group">
                <label htmlFor="categoryId">Category</label>
                <Controller
                    name="category"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            isClearable
                            isSearchable={false}
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                    )}
                />
                {errors.category && <p>Category is required.</p>}
            </div>
            <div className="form-group">
                <label htmlFor=''>Photo</label>
                <div>
                    <button onClick={handleClickRandom}   >
                        Random a photo
                    </button>
                </div>
                <div>
                    <img src={imgShow} alt='Oops...Cant find image'{...register('photo', { required: true })} />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" >Add to album</button>
            </div>
        </form>
    )
}