import Button from '@components/Button/Button';
import React from 'react';
import FormItem from '@/pages/DetailProduct/components/FormItem';
import styles from '../styles.module.scss';
export default function Review() {
    const {
        containerReview,
        review,
        noReview,
        replyForm,
        commentReplyTitle,
        commentNotes,
        commentFormCookiesConsent,
        btnSubmit
    } = styles;
    return (
        <div className={containerReview}>
            <div className={review}>REVIEWS</div>

            <p className={noReview}>There are no reviews yet</p>

            <div className={replyForm}>
                <div className={commentReplyTitle}>
                    BE THE FIRST TO REVIEW "10K YELLOW GOLD"
                </div>

                <p className={commentNotes}>
                    Your email address will be not published. Require fields are
                    marked
                </p>

                <form>
                    <FormItem
                        label={'Your rating'}
                        isRequired
                        typeChildren={'rating'}
                    />

                    <FormItem
                        label={'Your review'}
                        isRequired
                        typeChildren={'textarea'}
                    />

                    <FormItem
                        label={'Name'}
                        isRequired
                        typeChildren={'input'}
                    />
                    <FormItem
                        label={'Email'}
                        isRequired
                        typeChildren={'input'}
                    />

                    <div className={commentFormCookiesConsent}>
                        <input type='checkbox' />
                        <span>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </span>
                    </div>
                    <div className={btnSubmit}>
                        <Button content={'SUBMIT'} />
                    </div>
                </form>
            </div>
        </div>
    );
}
