import React, { Component } from 'react';
import { Card, Row, Col, Timeline, Icon } from '../../components';

export default class TimelineView extends Component{
    render(){
        return (
            <div>
                <h3>Timeline</h3>
                    <Row>
                        <Col col="6">
                            <Card>
                                <Card.Header>
                                    Default
                                </Card.Header>
                                <Card.Block>
                                    <Timeline>
                                        <Timeline.Item dot={<Icon type="play-circle-o" className="text-muted"/>}> 1999 疯狂世界 </Timeline.Item>
                                        <Timeline.Item>2000 爱情万岁</Timeline.Item>
                                        <Timeline.Item>2001 候鸟</Timeline.Item>
                                        <Timeline.Item>2002 摇滚本事</Timeline.Item>
                                        <Timeline.Item dot={<Icon type="clock-o" className="text-warning"/>}>2003 时光机</Timeline.Item>
                                        <Timeline.Item>2004 神的孩子在跳舞</Timeline.Item>
                                        <Timeline.Item>2005 盛夏光年</Timeline.Item>
                                        <Timeline.Item><p>2006 为爱而生</p>
                                            <p>天使</p>
                                            <p>忘词</p>
                                            <p>宠上天</p>
                                            <div>最重要的小事</div>
                                        </Timeline.Item>
                                        <Timeline.Item dot={<Icon type="globe" className="text-primary"/>}>2007 离开地球表面</Timeline.Item>
                                        <Timeline.Item>2008 后青春期的诗</Timeline.Item>
                                        <Timeline.Item>2009 DNA</Timeline.Item>
                                        <Timeline.Item unreachable dot={<Icon type="flag-checkered" className="text-success"/>}>2011 第二人生</Timeline.Item>
                                        <Timeline.Item dot={<Icon type="pause-circle-o" className="text-muted"/>}>
                                            <a href="javascript:void(0);">查看更多</a>
                                        </Timeline.Item>
                                    </Timeline>
                                </Card.Block>
                            </Card>
                        </Col>
                        <Col col="6">
                            <Card>
                                <Card.Header>
                                    Large
                                </Card.Header>
                                <Card.Block>
                                    <Timeline size="lg">
                                        <Timeline.Item dot={<Icon type="play-circle-o" className="text-muted"/>}> 1999 疯狂世界 </Timeline.Item>
                                        <Timeline.Item>2000 爱情万岁</Timeline.Item>
                                        <Timeline.Item>2001 候鸟</Timeline.Item>
                                        <Timeline.Item>2002 摇滚本事</Timeline.Item>
                                        <Timeline.Item dot={<Icon type="clock-o" className="text-warning"/>}>2003 时光机</Timeline.Item>
                                        <Timeline.Item>2004 神的孩子在跳舞</Timeline.Item>
                                        <Timeline.Item>2005 盛夏光年</Timeline.Item>
                                        <Timeline.Item><p>2006 为爱而生</p>
                                            <p>天使</p>
                                            <p>忘词</p>
                                            <p>宠上天</p>
                                            <div>最重要的小事</div>
                                        </Timeline.Item>
                                        <Timeline.Item dot={<Icon type="globe" className="text-primary"/>}>2007 离开地球表面</Timeline.Item>
                                        <Timeline.Item>2008 后青春期的诗</Timeline.Item>
                                        <Timeline.Item>2009 DNA</Timeline.Item>
                                        <Timeline.Item unreachable dot={<Icon type="flag-checkered" className="text-success"/>}>2011 第二人生</Timeline.Item>
                                        <Timeline.Item dot={<Icon type="pause-circle-o" className="text-muted"/>}>
                                            <a href="javascript:void(0);">查看更多</a>
                                        </Timeline.Item>
                                    </Timeline>
                                </Card.Block>
                            </Card>
                        </Col>
                    </Row>
            </div>
        );
    }
}