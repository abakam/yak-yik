import React from 'react'
import styles from './styles'

const Comment = (params) => {
    return (
        <div>
            <p style={styles.comment.commentBody}>
                {params.userComment.body}
            </p>
            <span style={styles.comment.commentUsername}>{params.userComment.username}</span>
            <span style={styles.comment.commentSeparator}>|</span>
            <span style={styles.comment.commentTimestamp}>{params.userComment.timestamp}</span>
            <hr />
        </div>
    );
}

export default Comment