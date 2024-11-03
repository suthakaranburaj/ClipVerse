import React, { useState, useEffect } from 'react';
import './ProfileUpdateForm.scss';

function ProfileUpdateForm({ isOpen, onClose, onUpdate, user }) {
    const [formData, setFormData] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "",
        password: "",
        avatar: user?.avatar || null,
        coverImage: user?.coverImage || null
    });

    const [previewAvatar, setPreviewAvatar] = useState(user?.avatar || "");
    const [previewCoverImage, setPreviewCoverImage] = useState(user?.coverImage || "");

    // Update formData when user data changes
    useEffect(() => {
        setFormData({
            fullName: user?.fullName || "",
            email: user?.email || "",
            password: "",
            avatar: user?.avatar || null,
            coverImage: user?.coverImage || null
        });
        setPreviewAvatar(user?.avatar || "");
        setPreviewCoverImage(user?.coverImage || "");
    }, [user]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        if (file) {
            setFormData({ ...formData, [name]: file });
            // Update preview image
            if (name === "avatar") setPreviewAvatar(URL.createObjectURL(file));
            if (name === "coverImage") setPreviewCoverImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter full name"
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter new password"
                        />
                    </label>
                    <label>
                        Avatar:
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {previewAvatar && <img src={previewAvatar} alt="Avatar Preview" className="image-preview" />}
                    </label>
                    <label>
                        Cover Image:
                        <input
                            type="file"
                            name="coverImage"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {previewCoverImage && <img src={previewCoverImage} alt="Cover Preview" className="image-preview" />}
                    </label>
                    <div className="modal-buttons">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileUpdateForm;
