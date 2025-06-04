// 애플리케이션 데이터
const appData = {
  "tools": {
    "excel": {
      "name": "Microsoft Excel",
      "color": "#1f5582",
      "icon": "📊",
      "summary": "전통적 스프레드시트의 강자",
      "features": [
        "강력한 데이터 처리 및 분석 능력",
        "방대한 함수 라이브러리 (수천 가지 내장 함수)",
        "피벗 테이블 및 고급 분석 도구",
        "VBA 매크로를 통한 자동화",
        "뛰어난 차트 및 시각화 기능",
        "조건부 서식 및 데이터 검증"
      ],
      "advantages": [
        "복잡한 계산 및 수식 처리에 탁월",
        "대용량 데이터 처리 가능 (1,048,576행 × 16,384열)",
        "강력한 통계 분석 및 모델링 기능",
        "다양한 파일 형식 지원",
        "오프라인 사용 가능",
        "사용자 정의 함수 및 매크로 지원"
      ],
      "disadvantages": [
        "협업 및 실시간 공유 기능 제한",
        "버전 관리의 어려움",
        "라이선스 비용 부담",
        "복잡한 파일 공유 과정",
        "보안 취약점 존재 가능성",
        "모바일 환경에서의 제한적 사용"
      ],
      "useCases": [
        "재무 분석 및 회계 업무",
        "복잡한 데이터 분석 및 통계 처리",
        "예산 계획 및 관리",
        "과학적 연구 데이터 분석",
        "비즈니스 모델링",
        "대규모 데이터셋 처리"
      ],
      "pricing": "유료 (Microsoft 365 구독)",
      "collaboration": 2,
      "dataProcessing": 5,
      "cost": 2,
      "accessibility": 3
    },
    "googleSheets": {
      "name": "Google Sheets",
      "color": "#0f9d58",
      "icon": "📈",
      "summary": "클라우드 기반 협업의 혁신",
      "features": [
        "실시간 협업 및 공동 편집",
        "클라우드 기반 자동 저장",
        "링크 공유를 통한 쉬운 접근",
        "구글 서비스와의 완벽한 연동",
        "강력한 배열 수식 기능",
        "다양한 애드온 및 확장 기능"
      ],
      "advantages": [
        "무료 사용 가능",
        "뛰어난 실시간 협업 기능",
        "자동 저장 및 버전 관리",
        "어디서나 접근 가능 (인터넷 연결 시)",
        "구글 생태계와의 완벽한 통합",
        "설문지 등 다른 구글 서비스와 연계"
      ],
      "disadvantages": [
        "인터넷 연결 필수",
        "엑셀 대비 느린 처리 속도",
        "제한된 데이터 용량 (500만 셀)",
        "일부 고급 기능 부족",
        "제한적인 단축키 지원",
        "복잡한 분석 도구 부족"
      ],
      "useCases": [
        "팀 협업 프로젝트",
        "실시간 데이터 공유",
        "설문 조사 결과 분석",
        "간단한 데이터 관리",
        "원격 근무 환경",
        "교육 및 학습 목적"
      ],
      "pricing": "무료 (Google 계정 필요)",
      "collaboration": 5,
      "dataProcessing": 3,
      "cost": 5,
      "accessibility": 5
    },
    "airtable": {
      "name": "Airtable",
      "color": "#ff6900",
      "icon": "🗃️",
      "summary": "스프레드시트와 데이터베이스의 융합",
      "features": [
        "관계형 데이터베이스 기능",
        "다양한 뷰 (그리드, 칸반, 갤러리, 캘린더, 간트)",
        "테이블 간 관계 설정",
        "자동화 워크플로우",
        "다양한 필드 타입 지원",
        "API 및 외부 서비스 연동"
      ],
      "advantages": [
        "직관적인 데이터베이스 관리",
        "유연한 데이터 구조",
        "강력한 관계형 기능",
        "다양한 뷰 옵션",
        "자동화 기능",
        "모바일 앱 지원"
      ],
      "disadvantages": [
        "높은 유료 플랜 비용",
        "제한적인 무료 플랜",
        "복잡한 계산 기능 부족",
        "협업 기능의 한계",
        "큰 그림 파악의 어려움",
        "상세 보고 기능 부재"
      ],
      "useCases": [
        "CRM 및 영업 관리",
        "프로젝트 관리",
        "콘텐츠 계획 및 관리",
        "재고 관리",
        "이벤트 계획",
        "SEO 및 마케팅 캠페인 관리"
      ],
      "pricing": "Freemium (월 $20/사용자부터)",
      "collaboration": 4,
      "dataProcessing": 3,
      "cost": 3,
      "accessibility": 4
    }
  },
  "comparisonCategories": [
    {
      "id": "collaboration",
      "name": "협업 기능",
      "description": "실시간 협업 및 공유 기능"
    },
    {
      "id": "dataProcessing",
      "name": "데이터 처리",
      "description": "복잡한 계산 및 분석 능력"
    },
    {
      "id": "cost",
      "name": "비용 효율성",
      "description": "가격 대비 가치"
    },
    {
      "id": "accessibility",
      "name": "접근성",
      "description": "사용 편의성 및 접근성"
    }
  ],
  "useCaseCategories": [
    {
      "name": "데이터 분석 중심",
      "recommended": "excel",
      "description": "복잡한 수치 분석, 통계 작업, 재무 모델링"
    },
    {
      "name": "실시간 협업 중심",
      "recommended": "googleSheets",
      "description": "팀 작업, 실시간 공유, 원격 근무"
    },
    {
      "name": "프로젝트 관리",
      "recommended": "airtable",
      "description": "워크플로우 관리, CRM, 관계형 데이터"
    }
  ]
};

// DOM 요소들
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const filterBtns = document.querySelectorAll('.filter-btn');
const recommendationForm = document.getElementById('recommendation-form');
const recommendationResult = document.getElementById('recommendation-result');
const resetRecommendationBtn = document.getElementById('reset-recommendation');

// 초기화
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeTabs();
  initializeFilters();
  initializeRecommendationEngine();
  populateContent();
  buildMatrixTable();
});

// 네비게이션 초기화
function initializeNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // 활성 네비게이션 업데이트
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      
      // 섹션 스크롤
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 스크롤 이벤트로 활성 네비게이션 업데이트
  window.addEventListener('scroll', updateActiveNavigation);
}

// 활성 네비게이션 업데이트
function updateActiveNavigation() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// 탭 초기화
function initializeTabs() {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // 활성 탭 버튼 업데이트
      tabBtns.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');
      
      // 활성 탭 패널 업데이트
      tabPanels.forEach(panel => panel.classList.remove('active'));
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// 필터 초기화
function initializeFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // 활성 필터 버튼 업데이트
      filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
      this.classList.add('active');
      
      // 필터 적용
      applyFilter(filter);
    });
  });
}

// 필터 적용
function applyFilter(filter) {
  const table = document.querySelector('.comparison-table tbody');
  if (!table) return;

  const rows = table.querySelectorAll('tr');
  
  if (filter === 'all') {
    rows.forEach(row => row.style.display = '');
    return;
  }

  const categoryMap = {
    'collaboration': '협업 기능',
    'dataProcessing': '데이터 처리',
    'cost': '비용 효율성',
    'accessibility': '접근성'
  };

  const targetCategory = categoryMap[filter];
  
  rows.forEach(row => {
    const categoryCell = row.querySelector('td:first-child');
    if (categoryCell && categoryCell.textContent.trim() === targetCategory) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// 추천 엔진 초기화
function initializeRecommendationEngine() {
  recommendationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateRecommendation();
  });

  resetRecommendationBtn.addEventListener('click', function() {
    recommendationResult.classList.add('hidden');
    recommendationForm.reset();
  });
}

// 콘텐츠 채우기
function populateContent() {
  // 각 도구별 상세 정보 채우기
  Object.keys(appData.tools).forEach(toolKey => {
    const tool = appData.tools[toolKey];
    
    // 특징 목록
    const featuresElement = document.getElementById(`${toolKey}-features`);
    if (featuresElement) {
      featuresElement.innerHTML = tool.features.map(feature => `<li>${feature}</li>`).join('');
    }
    
    // 장점 목록
    const advantagesElement = document.getElementById(`${toolKey}-advantages`);
    if (advantagesElement) {
      advantagesElement.innerHTML = tool.advantages.map(advantage => `<li>${advantage}</li>`).join('');
    }
    
    // 단점 목록
    const disadvantagesElement = document.getElementById(`${toolKey}-disadvantages`);
    if (disadvantagesElement) {
      disadvantagesElement.innerHTML = tool.disadvantages.map(disadvantage => `<li>${disadvantage}</li>`).join('');
    }
    
    // 활용 사례 목록
    const useCasesElement = document.getElementById(`${toolKey}-useCases`);
    if (useCasesElement) {
      useCasesElement.innerHTML = tool.useCases.map(useCase => `<li>${useCase}</li>`).join('');
    }
  });
}

// 매트릭스 테이블 구축
function buildMatrixTable() {
  const matrixBody = document.getElementById('matrix-body');
  if (!matrixBody) return;

  const categories = [
    { key: 'collaboration', name: '협업 기능' },
    { key: 'dataProcessing', name: '데이터 처리 능력' },
    { key: 'cost', name: '비용 효율성' },
    { key: 'accessibility', name: '접근성' },
    { key: 'pricing', name: '가격 정책' }
  ];

  const matrixData = {
    '협업 기능': {
      excel: '제한적 (동시 편집 지원하지만 OneDrive 필요)',
      googleSheets: '뛰어남 (실시간 공동 편집, 댓글, 채팅)',
      airtable: '좋음 (실시간 편집, 권한 관리)'
    },
    '데이터 처리 능력': {
      excel: '매우 뛰어남 (복잡한 수식, 피벗테이블, VBA)',
      googleSheets: '보통 (기본 함수, 제한된 데이터 용량)',
      airtable: '보통 (간단한 계산, 관계형 데이터에 특화)'
    },
    '비용 효율성': {
      excel: '유료 (Microsoft 365: 월 $6-22/사용자)',
      googleSheets: '무료 (Google 계정만 필요)',
      airtable: 'Freemium (무료 플랜 제한적, 유료: 월 $20+)'
    },
    '접근성': {
      excel: '보통 (설치 필요, 오프라인 가능)',
      googleSheets: '뛰어남 (웹 브라우저만 있으면 접근)',
      airtable: '좋음 (웹, 모바일 앱 지원)'
    },
    '가격 정책': {
      excel: appData.tools.excel.pricing,
      googleSheets: appData.tools.googleSheets.pricing,
      airtable: appData.tools.airtable.pricing
    }
  };

  const tools = ['excel', 'googleSheets', 'airtable'];
  
  categories.forEach(category => {
    const row = document.createElement('tr');
    
    // 카테고리 이름
    const categoryCell = document.createElement('td');
    categoryCell.textContent = category.name;
    categoryCell.style.fontWeight = 'var(--font-weight-semibold)';
    row.appendChild(categoryCell);
    
    // 각 도구별 데이터
    tools.forEach(toolKey => {
      const cell = document.createElement('td');
      
      if (category.key === 'pricing') {
        cell.textContent = appData.tools[toolKey].pricing;
      } else if (matrixData[category.name]) {
        cell.textContent = matrixData[category.name][toolKey];
      } else if (appData.tools[toolKey][category.key] !== undefined) {
        const value = appData.tools[toolKey][category.key];
        // 숫자 값을 별점으로 변환
        if (typeof value === 'number') {
          const stars = '★'.repeat(value) + '☆'.repeat(5 - value);
          cell.innerHTML = `${stars} (${value}/5)`;
        } else {
          cell.textContent = value;
        }
      }
      
      cell.style.fontSize = 'var(--font-size-sm)';
      row.appendChild(cell);
    });
    
    matrixBody.appendChild(row);
  });
}

// 추천 계산
function calculateRecommendation() {
  const collaboration = parseInt(document.getElementById('collaboration-priority').value);
  const dataComplexity = parseInt(document.getElementById('data-complexity').value);
  const budget = parseInt(document.getElementById('budget-consideration').value);
  const teamSize = document.getElementById('team-size').value;

  // 각 도구별 점수 계산
  const scores = {};
  
  Object.keys(appData.tools).forEach(toolKey => {
    const tool = appData.tools[toolKey];
    let score = 0;
    
    // 협업 중요도 (25% 가중치)
    score += (tool.collaboration / 5) * collaboration * 0.25;
    
    // 데이터 처리 복잡도 (30% 가중치)
    score += (tool.dataProcessing / 5) * dataComplexity * 0.3;
    
    // 예산 고려사항 (25% 가중치) - 높을수록 무료를 선호
    score += (tool.cost / 5) * budget * 0.25;
    
    // 접근성 (20% 가중치)
    score += (tool.accessibility / 5) * 4 * 0.2;
    
    // 팀 규모 보너스
    if (teamSize === 'large' && toolKey === 'googleSheets') {
      score += 0.5; // 대규모 팀에서 Google Sheets 보너스
    } else if (teamSize === 'small' && toolKey === 'excel') {
      score += 0.3; // 소규모 팀에서 Excel 보너스
    } else if (teamSize === 'medium' && toolKey === 'airtable') {
      score += 0.2; // 중간 규모 팀에서 Airtable 보너스
    }
    
    scores[toolKey] = Math.min(score, 5); // 최대 5점으로 제한
  });

  // 최고 점수 도구 찾기
  const bestTool = Object.keys(scores).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  );

  // 결과 표시
  displayRecommendationResult(bestTool, scores);
}

// 추천 결과 표시
function displayRecommendationResult(bestToolKey, scores) {
  const bestTool = appData.tools[bestToolKey];
  
  // 결과 정보 업데이트
  document.getElementById('result-icon').textContent = bestTool.icon;
  document.getElementById('result-name').textContent = bestTool.name;
  document.getElementById('result-summary').textContent = bestTool.summary;
  
  // 추천 이유 생성
  let reason = `귀하의 요구사항을 분석한 결과, ${bestTool.name}이(가) 가장 적합합니다. `;
  
  if (bestToolKey === 'excel') {
    reason += '복잡한 데이터 분석과 계산 기능이 뛰어나며, 오프라인에서도 강력한 성능을 발휘합니다.';
  } else if (bestToolKey === 'googleSheets') {
    reason += '뛰어난 협업 기능과 무료 사용이 가능하며, 어디서나 쉽게 접근할 수 있습니다.';
  } else if (bestToolKey === 'airtable') {
    reason += '데이터베이스 기능과 스프레드시트의 장점을 모두 갖추고 있어 프로젝트 관리에 최적화되어 있습니다.';
  }
  
  document.getElementById('result-reason').textContent = reason;
  
  // 점수 바 업데이트
  Object.keys(scores).forEach(toolKey => {
    const scoreElement = document.getElementById(`${toolKey}-score`);
    const scoreValueElement = document.getElementById(`${toolKey}-score-value`);
    
    if (scoreElement && scoreValueElement) {
      const percentage = (scores[toolKey] / 5) * 100;
      scoreElement.style.width = `${percentage}%`;
      scoreValueElement.textContent = `${scores[toolKey].toFixed(1)}`;
      
      // 애니메이션 효과
      setTimeout(() => {
        scoreElement.style.width = `${percentage}%`;
      }, 100);
    }
  });
  
  // 결과 표시
  recommendationResult.classList.remove('hidden');
  
  // 결과 섹션으로 스크롤
  recommendationResult.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

// 스무스 스크롤 폴리필 (구형 브라우저 지원)
if (!('scrollBehavior' in document.documentElement.style)) {
  const smoothScrollPolyfill = document.createElement('script');
  smoothScrollPolyfill.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
  document.head.appendChild(smoothScrollPolyfill);
  
  smoothScrollPolyfill.onload = function() {
    window.__forceSmoothScrollPolyfill__ = true;
    window.smoothscroll.polyfill();
  };
}

// 성능 최적화를 위한 디바운스 함수
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 스크롤 이벤트 최적화
window.addEventListener('scroll', debounce(updateActiveNavigation, 100));

// 키보드 접근성 개선
document.addEventListener('keydown', function(e) {
  // Tab 키로 포커스 이동 시 포커스 표시 개선
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-navigation');
});

// 로딩 완료 후 애니메이션 트리거
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});