import React, { useState, useMemo } from 'react';
import '../css/Rating.css';

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState([]);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating && comment) {
            const newReview = {
                rating,
                comment,
                id: Date.now(),
                timestamp: new Date().toLocaleString(),
            };
            setReviews([...reviews, newReview]);
            setRating(0);
            setComment('');
        }
    };

    const getRatingSummary = () => {
        const summary = [0, 0, 0, 0, 0]; 
        reviews.forEach(review => {
            summary[5 - review.rating]++; 
        });
        return summary;
    };

    const ratingSummary = getRatingSummary();

    const averageRating = useMemo(() => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (totalRating / reviews.length).toFixed(1);
    }, [reviews]);

    return (
        <div className="rating-container">
            <div className="review-form-section">
                <h2>REVIEWS</h2>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`star ${star <= rating ? 'selected' : ''}`}
                            onClick={() => handleRating(star)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Your review"
                    required
                />
                <button type="submit" onClick={handleSubmit}>Send Review</button>
            </div>
            <div className="summary-section">
                <h3>Overall Rating</h3>
                <div className="rating-summary">
                    <div className="average-rating">
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`star ${star <= averageRating ? 'selected' : ''}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p style={{ textAlign: 'center' }}>{averageRating} PER 5</p>

                    </div>
                    <div className="rating-distribution">
                        {ratingSummary.map((count, index) => (
                            <div key={index} className="summary-item">
                                <span className="star">
                                    {Array(5 - index).fill().map((_, i) => (
                                        <span key={i} className="star selected">★</span>
                                    ))}
                                </span>
                                <p>{count} stars</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="reviews-section">
                <h3>ALL REVIEWS</h3>
                {reviews.length === 0 && <p>NO REVIEW</p>}
                {reviews.map((review) => (
                    <div key={review.id} className="review">
                        <div className="review-header">
                            <span className="review-rating">
                                {Array(review.rating).fill().map((_, i) => (
                                    <span key={i} className="star selected">★</span>
                                ))}
                            </span>
                            <span className="review-timestamp">{review.timestamp}</span>
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;
