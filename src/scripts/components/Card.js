import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import CardBlock from './CardBlock';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

/**
 * Card组件.
 */
export default class Card extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //是否block
        block: PropTypes.bool,
        //是否无边框
        noborder: PropTypes.bool
    }
    //默认props
    static defaultProps = {
        block: false,
        noborder: false
    }
    //渲染
    render(){
        let { block, noborder, className, children, ...others } = this.props,
            blockClass = block? `card-block`: null,
            borderClass = noborder? 'no-border' : null;

        return(
            <div {...others} className={classnames('card', blockClass, borderClass, className)}>
                {children}
            </div>
        );
    }
}

Card.Block  = CardBlock;
Card.Header = CardHeader;
Card.Footer = CardFooter;