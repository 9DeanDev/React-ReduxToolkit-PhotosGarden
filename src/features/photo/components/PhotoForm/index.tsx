import Styles from './PhotoForm.module.scss'
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import { useForm, Controller } from 'react-hook-form';
type Props = {}

interface IFormInput {
    title: string;
    category: {};
}
export default function PhotoForm({ }: Props) {
    const { register, handleSubmit, control, formState: { errors }, } = useForm<IFormInput>();
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
                    <button>
                        Random a photo
                    </button>
                </div>
                <div>
                    <img src='' />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Add to album</button>
            </div>
        </form>
    )
}