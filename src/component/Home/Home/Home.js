import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Home = () => {
    const [img, setImg] = useState(null)
    const imageInput = (e) => {
        const file = e.target.files[0]
        setImg(file)
    }
    const { user } = useContext(AuthContext)
    const handlePostSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const write = form.write.value;
        const picture = img;
        // imgbb
        const formData = new FormData();
        formData.append('image', picture);
        const url = "https://api.imgbb.com/1/upload?key=1e913f26aed6d05edc8dc43e8482837d"
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const picture = imgData.data.url
                    const uploadPhoto = {
                        write: write,
                        picture: picture,
                    };
                    console.log(uploadPhoto);
                    fetch('http://localhost:5000/post', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(uploadPhoto)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success("Your Post is updated");
                        })
                }
            })
    }
    return (
        <form onSubmit={handlePostSubmit}>
            <div className="form-control text-black font-poppins">
                <label className="label">
                    <span className="label-text mx-auto text-lg text-black">Wants to write something?</span>
                </label>
                <textarea name='write' id='write' className="text-black textarea  textarea-primary w-1/2 mx-auto h-1/2" placeholder="Write Here"></textarea>
                <input onClick={imageInput} id='photo' type="file" name='photo' className="file-input mx-auto mt-7 file-input-bordered file-input-primary w-full max-w-xs" />
                <button className='btn btn-primary text-black w-1/2 mx-auto mt-7'>Submit</button>
            </div>
        </form>
    );
};

export default Home;
