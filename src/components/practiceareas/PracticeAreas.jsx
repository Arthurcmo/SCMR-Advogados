import React, { useState } from 'react';
import './PracticeAreas.css';

const practiceAreas = [
  { title: "Administrativo e Regulatório", description: "Atuamos na interface entre o setor privado e o Poder Público, assessorando empresas em licitações, contratos administrativos, concessões, permissões e parcerias público-privadas (PPPs). Oferecemos suporte estratégico em processos regulatórios perante agências e órgãos de controle, além de consultoria em conformidade regulatória e defesa em processos administrativos e judiciais." },
  { title: "Agronegócio ", description: "Prestamos assessoria jurídica completa para produtores, cooperativas e empresas do setor agroindustrial. Nosso trabalho engloba contratos de fornecimento e parceria rural, regularização fundiária, financiamento agrícola, operações de barter, questões ambientais e tributárias, bem como a estruturação societária de negócios ligados ao campo." },
  { title: "Ambiental", description: "Assessoramos empresas em questões relacionadas à sustentabilidade e conformidade ambiental, incluindo licenciamento, auditorias, gestão de passivos, termos de ajustamento de conduta e ações civis públicas. Nosso objetivo é conciliar desenvolvimento econômico e responsabilidade socioambiental, garantindo segurança jurídica na tomada de decisões." },
  { title: "Comércio Internacional e Aduaneiro ", description: "Oferecemos suporte jurídico em importações, exportações e operações de comércio exterior, abrangendo regimes aduaneiros especiais, classificação fiscal de mercadorias, benefícios tributários e defesa em autos de infração. Também assessoramos empresas em negociações internacionais e em controvérsias relacionadas a barreiras comerciais." },
  { title: "Contratos", description: "Elaboramos, revisamos e negociamos contratos empresariais, garantindo clareza, equilíbrio e segurança jurídica nas relações comerciais. Atuamos em contratos de compra e venda, distribuição, representação comercial, prestação de serviços, franquia, joint ventures e operações complexas, sempre adaptados à realidade e ao setor de cada cliente." },
  { title: "Empresarial ", description: "Atuamos na estruturação, manutenção e expansão de negócios, oferecendo assessoria em todos os aspectos do direito empresarial. Nossas atividades abrangem desde a constituição de empresas até a solução de disputas societárias e comerciais, sempre com enfoque estratégico para o crescimento sustentável das organizações." },
  { title: "Imobiliário ", description: "Prestamos consultoria e assessoria em operações imobiliárias, incluindo compra e venda, locação, incorporação, loteamentos, regularização de imóveis e análise de riscos. Atuamos em todas as etapas da negociação, oferecendo soluções jurídicas que conferem segurança e eficiência em transações de alto valor." },
  { title: "Precatórios e Ativos Judiciais", description: "Atuamos na gestão estratégica de precatórios e demais créditos reconhecidos judicialmente, assessorando credores em análises de viabilidade, cessões, compensações tributárias e negociações com entes públicos. Nosso objetivo é oferecer soluções seguras e eficientes para maximizar o valor desses ativos." },
  { title: "Recuperacional e Falimentar", description: "Atuamos em processos de recuperação judicial, extrajudicial e falência, assessorando empresas na reestruturação de passivos e na preservação da atividade empresarial. Também representamos credores na defesa de seus interesses, conduzindo negociações e litígios de alta complexidade com foco em soluções eficientes." },
  { title: "Relações de Trabalho", description: "Apoiamos empresas na gestão estratégica de suas relações trabalhistas, desde a elaboração de políticas internas até a defesa em reclamações judiciais e procedimentos administrativos. Nosso trabalho inclui consultoria preventiva, negociação coletiva, auditorias trabalhistas e estruturação de modelos de contratação modernos e eficientes." },
  { title: "Societário", description: "Assessoramos na constituição, reorganização e governança de sociedades, bem como em operações de fusões, aquisições, joint ventures e dissoluções. Nossa atuação alia rigor técnico e visão estratégica para garantir a segurança dos sócios e investidores em todas as fases do ciclo empresarial." },
  { title: "Tecnologia e Propriedade Intelectual", description: "Assessoramos empresas em questões envolvendo inovação, proteção de dados e direitos de propriedade intelectual. Atuamos na adequação à LGPD, na prevenção e gestão de riscos digitais, bem como na proteção e defesa de marcas, patentes, direitos autorais e segredos empresariais em operações e litígios." },
  { title: "Tributário", description: "Oferecemos consultoria tributária estratégica e atuação contenciosa em âmbito judicial e administrativo. Nossos serviços incluem planejamento fiscal, revisão de passivos, análise de incentivos, defesas em execuções fiscais, além de estudos voltados à otimização da carga tributária de empresas de diversos setores." },
];

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="practice-wrapper">
      {/* First row */}
      <div className="side-blank" />
      <div className="image-section">
        <img src="/buildings2.webp" alt="Law Firm" className="hero-image" />
      </div>
      <div className="side-right" />

      {/* Second row */}
      <div className="left-color" />
      <div className="content-wrapper">
        <div className="left-panel">
          <h3 className="practice-areas-h3">ÁREAS DE</h3>
          <h3 className="practice-areas-h3">ATUAÇÃO</h3>

          <ul className="practice-areas-list">
            {practiceAreas.map((area, index) => (
              <li
                key={index}
                onClick={() => setSelectedArea(index)}
                style={{
                  cursor: 'pointer',
                  color: selectedArea === index ? 'var(--color-primary)' : '#676'
                }}
              >
                <h3>{area.title}</h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          {selectedArea !== null && (
            <button
              onClick={() => setSelectedArea(null)}
              className="close-button"
            >
              ←
            </button>
          )}
          <h2>{selectedArea !== null ? practiceAreas[selectedArea].title : 'Atuação'}</h2>
          <p>
            {selectedArea !== null
              ? practiceAreas[selectedArea].description
              : 'Nosso escritório oferece assessoria jurídica estratégica e multidisciplinar em diversas áreas do Direito, atendendo tanto pessoas físicas quanto jurídicas em demandas consultivas e contenciosas. Atuamos na prevenção e solução de conflitos, na estruturação de negócios e na defesa de interesses perante órgãos administrativos e judiciais. Com uma equipe especializada e comprometida, buscamos sempre aliar rigor técnico, visão prática e inovação, oferecendo soluções seguras e eficientes para os desafios enfrentados por nossos clientes em setores como empresarial, contratual, societário, regulatório, trabalhista, ambiental, imobiliário, tributário, tecnológico e internacional.'}
          </p>
        </div>
      </div>
      <div className="side-right bottom" />
    </div>
  );
};

export default PracticeAreas;
