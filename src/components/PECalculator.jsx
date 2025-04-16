import React, { useState, useEffect } from 'react';
import { 
  Form, 
  Select, 
  InputNumber, 
  Button, 
  Radio, 
  Typography, 
  Divider, 
  Input,
  Row,
  Col,
  Table,
  Tag,
  message,
  Avatar} from 'antd';
import {
  getScoreByPerformance,
  calculateWeightedScore,
  calculateFinalScore,
  getCategoryEvents
} from '../data/scoreData';
import {
  TrophyOutlined,
  BarChartOutlined,
  CalculatorOutlined} from '@ant-design/icons';

const { Option } = Select;
const { Title, Text } = Typography;

const PECalculator = () => {
  // State 定义部分保持不变
  const [form] = Form.useForm();
  const [gender, setGender] = useState('male');
  const [category1Events, setCategory1Events] = useState([]);
  const [category2Events, setCategory2Events] = useState([]);
  const [category3Events, setCategory3Events] = useState([]);
  const [category4Events, setCategory4Events] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState({
    category1: '',
    category2: '',
    category3: '',
    category4: ''
  });
  const [inputUnit, setInputUnit] = useState({
    category1: '',
    category2: '',
    category3: '',
    category4: ''
  });
  const [valueType, setValueType] = useState({
    category1: '',
    category2: '',
    category3: '',
    category4: ''
  });
  const [calculatedScores, setCalculatedScores] = useState({
    category1: { raw: 0, weighted: 0, bonus: 0 },
    category2: { raw: 0, weighted: 0, bonus: 0 },
    category3: { raw: 0, weighted: 0, bonus: 0 },
    category4: { raw: 0, weighted: 0, bonus: 0 },
    total: { raw: 0, final: 0 }
  });
  const [calculated, setCalculated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // 加载项目列表
    setCategory1Events(getCategoryEvents(gender, 'category1'));
    setCategory2Events(getCategoryEvents(gender, 'category2'));
    setCategory3Events(getCategoryEvents(gender, 'category3'));
    setCategory4Events(getCategoryEvents(gender, 'category4'));
    
    // 重置选定的项目
    setSelectedEvents({
      category1: '',
      category2: '',
      category3: '',
      category4: ''
    });
    
    // 重置表单
    form.resetFields();
    setCalculated(false);
  }, [gender, form]);

  const handleEventChange = (value, category) => {
    setSelectedEvents(prev => ({
      ...prev,
      [category]: value
    }));
    
    // 更新输入单位
    try {
      const eventData = require('../data/scoreData').default[gender][category][value];
      setInputUnit(prev => ({
        ...prev,
        [category]: eventData.unit
      }));
      setValueType(prev => ({
        ...prev,
        [category]: eventData.valueType
      }));
    } catch (error) {
      console.error('获取单位出错:', error);
    }
    
    // 重置该类别的成绩输入
    form.setFieldsValue({
      [`${category}Performance`]: undefined
    });
  };
  
  const calculateScores = (values) => {
    // 计算各类别得分
    const category1Result = getScoreByPerformance(
      gender, 
      'category1', 
      selectedEvents.category1, 
      values.category1Performance
    );
    
    const category2Result = getScoreByPerformance(
      gender, 
      'category2', 
      selectedEvents.category2, 
      values.category2Performance
    );
    
    const category3Result = getScoreByPerformance(
      gender, 
      'category3', 
      selectedEvents.category3, 
      values.category3Performance
    );
    
    const category4Result = getScoreByPerformance(
      gender, 
      'category4', 
      selectedEvents.category4, 
      values.category4Performance
    );
    
    // 计算加权分数
    const category1WeightedScore = calculateWeightedScore(category1Result.score, 'category1');
    const category2WeightedScore = calculateWeightedScore(category2Result.score, 'category2');
    const category3WeightedScore = calculateWeightedScore(category3Result.score, 'category3');
    const category4WeightedScore = calculateWeightedScore(category4Result.score, 'category4');
    
    // 计算最终分数
    const weightedScores = [
      category1WeightedScore + category1Result.bonus,
      category2WeightedScore,
      category3WeightedScore,
      category4WeightedScore
    ];
    
    const rawTotal = weightedScores.reduce((sum, score) => sum + score, 0);
    const finalScore = calculateFinalScore(weightedScores);
    
    setCalculatedScores({
      category1: { 
        raw: category1Result.score, 
        weighted: category1WeightedScore, 
        bonus: category1Result.bonus 
      },
      category2: { 
        raw: category2Result.score, 
        weighted: category2WeightedScore,
        bonus: 0
      },
      category3: { 
        raw: category3Result.score, 
        weighted: category3WeightedScore,
        bonus: 0
      },
      category4: { 
        raw: category4Result.score, 
        weighted: category4WeightedScore,
        bonus: 0
      },
      total: { 
        raw: rawTotal, 
        final: finalScore 
      }
    });
    
    setCalculated(true);
    message.success('成绩计算成功！');
    
    // 滚动到结果区域
    setTimeout(() => {
      const resultElement = document.getElementById('result-section');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };
  
  const onFinish = (values) => {
    // 处理时间格式输入
    const processedValues = { ...values };
    
    // 处理各类项目的时间输入
    ['category1', 'category2', 'category3', 'category4'].forEach(category => {
      if (
        selectedEvents[category] && 
        valueType[category] === 'time' && 
        values[`${category}Performance`]
      ) {
        const { minutes, seconds } = values[`${category}Performance`];
        // 转换为 "分:秒" 格式
        processedValues[`${category}Performance`] = `${minutes}:${seconds.toFixed(2)}`;
      }
    });
    
    calculateScores(processedValues);
  };
  
  const renderPerformanceInput = (category) => {
    const type = valueType[category];
    
    if (!selectedEvents[category]) {
      return null;
    }
    
    if (type === 'time') {
      return (
        <Form.Item noStyle>
          <Input.Group compact>
            <Form.Item
              name={[`${category}Performance`, 'minutes']}
              noStyle
              rules={[{ required: true, message: '请输入分钟' }]}
            >
              <InputNumber 
                min={0} 
                placeholder="分钟"
                style={{ width: '50%' }}
              />
            </Form.Item>
            <Form.Item
              name={[`${category}Performance`, 'seconds']}
              noStyle
              rules={[{ required: true, message: '请输入秒数' }]}
            >
              <InputNumber 
                min={0} 
                max={59.99} 
                step={0.01} 
                placeholder="秒数"
                style={{ width: '50%' }}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>
      );
    } else if (type === 'decimal') {
      return (
        <InputNumber 
          min={0} 
          step={0.01} 
          placeholder={`请输入${inputUnit[category]}`}
          addonAfter={inputUnit[category]}
          style={{ width: '100%' }}
        />
      );
    } else {
      return (
        <InputNumber 
          min={0} 
          placeholder={`请输入${inputUnit[category]}`}
          addonAfter={inputUnit[category]}
          style={{ width: '100%' }}
        />
      );
    }
  };
  
  const categoryColors = {
    '1': '#1890ff', 
    '2': '#52c41a', 
    '3': '#fa8c16', 
    '4': '#722ed1'
  };
  
  const resultData = calculated ? [
    {
      key: '1',
      category: '第一类项目',
      event: selectedEvents.category1,
      rawScore: calculatedScores.category1.raw,
      weight: '0.06',
      weightedScore: calculatedScores.category1.weighted.toFixed(2),
      bonus: calculatedScores.category1.bonus.toFixed(2),
      finalScore: (calculatedScores.category1.weighted + calculatedScores.category1.bonus).toFixed(2)
    },
    {
      key: '2',
      category: '第二类项目',
      event: selectedEvents.category2,
      rawScore: calculatedScores.category2.raw,
      weight: '0.03',
      weightedScore: calculatedScores.category2.weighted.toFixed(2),
      bonus: calculatedScores.category2.bonus.toFixed(2),
      finalScore: (calculatedScores.category2.weighted + calculatedScores.category2.bonus).toFixed(2)
    },
    {
      key: '3',
      category: '第三类项目',
      event: selectedEvents.category3,
      rawScore: calculatedScores.category3.raw,
      weight: '0.03',
      weightedScore: calculatedScores.category3.weighted.toFixed(2),
      bonus: calculatedScores.category3.bonus.toFixed(2),
      finalScore: (calculatedScores.category3.weighted + calculatedScores.category3.bonus).toFixed(2)
    },
    {
      key: '4',
      category: '第四类项目',
      event: selectedEvents.category4,
      rawScore: calculatedScores.category4.raw,
      weight: '0.03',
      weightedScore: calculatedScores.category4.weighted.toFixed(2),
      bonus: calculatedScores.category4.bonus.toFixed(2),
      finalScore: (calculatedScores.category4.weighted + calculatedScores.category4.bonus).toFixed(2)
    }
  ] : [];

  // 移动端表格列
  const mobileColumns = [
    {
      title: '项目',
      dataIndex: 'event',
      key: 'event',
      render: (text, record) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <Avatar 
              size="small"
              style={{ 
                backgroundColor: categoryColors[record.key], 
                marginRight: 5
              }}
            >
              {record.key}
            </Avatar>
            <Text strong>{record.category}</Text>
          </div>
          <div>{text}</div>
        </div>
      )
    },
    {
      title: '得分',
      key: 'score',
      render: (_, record) => (
        <div>
          <div>原始: {record.rawScore}</div>
          <div>
            权重: {record.weight} → {record.weightedScore}分
          </div>
          {parseFloat(record.bonus) > 0 && (
            <div>
              <Tag color="green">+{record.bonus}分</Tag>
            </div>
          )}
          <Divider style={{ margin: '5px 0' }} />
          <div>
            <Text strong style={{ fontSize: '16px' }}>{record.finalScore}分</Text>
          </div>
        </div>
      )
    }
  ];

  // 桌面端表格列
  const desktopColumns = [
    {
      title: '项目类别',
      dataIndex: 'category',
      key: 'category',
      width: 120,
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            style={{ 
              backgroundColor: categoryColors[record.key], 
              marginRight: 8 
            }}
          >
            {record.key}
          </Avatar>
          {text}
        </div>
      )
    },
    {
      title: '选择项目',
      dataIndex: 'event',
      key: 'event',
      width: 120,
    },
    {
      title: '原始分数',
      dataIndex: 'rawScore',
      key: 'rawScore',
      width: 100,
    },
    {
      title: '权重',
      dataIndex: 'weight',
      key: 'weight',
      width: 80,
    },
    {
      title: '加权分数',
      dataIndex: 'weightedScore',
      key: 'weightedScore',
      width: 100,
    },
    {
      title: '附加分',
      dataIndex: 'bonus',
      key: 'bonus',
      width: 80,
      render: (text) => (
        parseFloat(text) > 0 ? <Tag color="green">+{text}</Tag> : text
      )
    },
    {
      title: '最终分数',
      dataIndex: 'finalScore',
      key: 'finalScore',
      width: 100,
      render: (text) => <Tag color="blue">{text}</Tag>
    }
  ];

  return (
    <div style={{ padding: isMobile ? '5px' : '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '15px' : '30px' }}>
        <Title level={isMobile ? 3 : 2}>
          <TrophyOutlined style={{ marginRight: '8px', color: '#faad14' }} />
          上海体育中考成绩计算器
        </Title>
      </div>
      
      <div>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item 
            label="性别选择" 
            rules={[{ required: true, message: '请选择性别' }]}
            style={{ marginBottom: isMobile ? '15px' : '30px' }}
          >
            <Radio.Group 
              value={gender} 
              onChange={e => setGender(e.target.value)}
              buttonStyle="solid"
              style={{ width: '100%' }}
            >
              <Radio.Button value="male" style={{ width: '50%', textAlign: 'center' }}>男生</Radio.Button>
              <Radio.Button value="female" style={{ width: '50%', textAlign: 'center' }}>女生</Radio.Button>
            </Radio.Group>
          </Form.Item>
          
          <Divider orientation="left" style={{ margin: '15px 0' }}>
            第一类项目
          </Divider>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category1Event" 
                label="选择项目" 
                rules={[{ required: true, message: '请选择第一类项目' }]}
              >
                <Select 
                  placeholder="请选择项目" 
                  onChange={(value) => handleEventChange(value, 'category1')}
                >
                  {category1Events.map(event => (
                    <Option key={event} value={event}>{event}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category1Performance" 
                label="输入成绩" 
                rules={[{ required: true, message: '请输入成绩' }]}
                tooltip={selectedEvents.category1 ? `请输入${selectedEvents.category1}的成绩，单位为${inputUnit.category1}` : ''}
              >
                {renderPerformanceInput('category1')}
              </Form.Item>
            </Col>
          </Row>
          
          <Divider orientation="left" style={{ margin: '15px 0' }}>
            第二类项目
          </Divider>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category2Event" 
                label="选择项目" 
                rules={[{ required: true, message: '请选择第二类项目' }]}
              >
                <Select 
                  placeholder="请选择项目" 
                  onChange={(value) => handleEventChange(value, 'category2')}
                >
                  {category2Events.map(event => (
                    <Option key={event} value={event}>{event}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category2Performance" 
                label="输入成绩" 
                rules={[{ required: true, message: '请输入成绩' }]}
                tooltip={selectedEvents.category2 ? `请输入${selectedEvents.category2}的成绩，单位为${inputUnit.category2}` : ''}
              >
                {renderPerformanceInput('category2')}
              </Form.Item>
            </Col>
          </Row>
          
          <Divider orientation="left" style={{ margin: '15px 0' }}>
            第三类项目
          </Divider>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category3Event" 
                label="选择项目" 
                rules={[{ required: true, message: '请选择第三类项目' }]}
              >
                <Select 
                  placeholder="请选择项目" 
                  onChange={(value) => handleEventChange(value, 'category3')}
                >
                  {category3Events.map(event => (
                    <Option key={event} value={event}>{event}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category3Performance" 
                label="输入成绩" 
                rules={[{ required: true, message: '请输入成绩' }]}
                tooltip={selectedEvents.category3 ? `请输入${selectedEvents.category3}的成绩，单位为${inputUnit.category3}` : ''}
              >
                {renderPerformanceInput('category3')}
              </Form.Item>
            </Col>
          </Row>
          
          <Divider orientation="left" style={{ margin: '15px 0' }}>
            第四类项目
          </Divider>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category4Event" 
                label="选择项目" 
                rules={[{ required: true, message: '请选择第四类项目' }]}
              >
                <Select 
                  placeholder="请选择项目" 
                  onChange={(value) => handleEventChange(value, 'category4')}
                >
                  {category4Events.map(event => (
                    <Option key={event} value={event}>{event}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item 
                name="category4Performance" 
                label="输入成绩" 
                rules={[{ required: true, message: '请输入成绩' }]}
                tooltip={selectedEvents.category4 ? `请输入${selectedEvents.category4}的成绩，单位为${inputUnit.category4}` : ''}
              >
                {renderPerformanceInput('category4')}
              </Form.Item>
            </Col>
          </Row>
          
          <Form.Item style={{ marginTop: '20px' }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              block
              style={{ 
                height: isMobile ? '40px' : '48px', 
                fontSize: isMobile ? '14px' : '16px' 
              }}
              icon={<CalculatorOutlined />}
            >
              计算总分
            </Button>
          </Form.Item>
        </Form>
      </div>
      
      {calculated && (
        <div id="result-section" style={{ marginTop: '20px' }}>
          <Divider orientation="center" style={{ fontWeight: 'bold' }}>
            <BarChartOutlined style={{ marginRight: '8px' }} />
            计算结果
          </Divider>
          
          <Table 
            columns={isMobile ? mobileColumns : desktopColumns} 
            dataSource={resultData} 
            pagination={false}
            size={isMobile ? 'small' : 'middle'}
            style={{ marginBottom: '20px' }}
            scroll={isMobile ? { x: 'max-content' } : undefined}
          />
          
          <Row gutter={16} justify="center" style={{ marginTop: '20px' }}>
            <Col xs={12} sm={8}>
              <div style={{ textAlign: 'center', background: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
                <Text type="secondary">原始总分</Text>
                <div style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: 'bold', color: '#1890ff' }}>
                  {calculatedScores.total.raw.toFixed(2)} 分
                </div>
              </div>
            </Col>
            <Col xs={12} sm={8}>
              <div style={{ textAlign: 'center', background: '#f6ffed', padding: '10px', borderRadius: '4px' }}>
                <Text type="secondary">最终得分</Text>
                <div style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#52c41a' }}>
                  {calculatedScores.total.final.toFixed(2)} 分
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default PECalculator;