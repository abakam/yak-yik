import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component {
    constructor(){
        super();
        this.state = {
            comment: {
                username: '',
                body: '',
            },
            comments: [
                {body: 'comment 1', username: 'dtrump', timestamp: '10:30'},
                {body: 'comment 2', username: 'hclinton', timestamp: '1:15'},
                {body: 'comment 3', username: 'gjohnson', timestamp: '7:30'}
            ]
        }
    }

    submitComment(){
        let updatedComment = Object.assign({}, this.state.comment);
       
        if(updatedComment.username !== '' && updatedComment.body !== ''){
            let updatedComments = Object.assign([], this.state.comments);
            updatedComment.timestamp = (7 + updatedComments.length).toString() + ':' + (30 + updatedComments.length).toString();
            updatedComments.push(updatedComment);
            this.setState({
                comment: {username: '', body: ''},
                comments: updatedComments
            });
            this.clearInputs();
        }
        
    }

    clearInputs(){
        let usernameInput = document.getElementById('username');
        usernameInput.value = '';
        let commentInput = document.getElementById('body');
        commentInput.value = '';
    }

    updateUsername(e) {
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['username'] = e.target.value;
        this.setState({
            comment: updatedComment
        });
    }

    updateBody(e){
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['body'] = e.target.value;
        this.setState({
            comment: updatedComment
        });
    }

    render(){
       const comments = this.state.comments.map((comment, id) =>  <li key={id}><Comment userComment={comment} /></li>)
        return(
            <div>
                <h2 >Comments: Zone 1</h2>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        {comments}
                    </ul>

                    <input type="text" className="form-control" placeholder="Username" onChange={this.updateUsername.bind(this)} id='username' /><br />
                    <input type="text" className="form-control" placeholder="Comment" onChange={this.updateBody.bind(this)} id='body' /><br />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        )
    }
}

export default Comments