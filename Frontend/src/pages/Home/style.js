import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
`;

export const Header = styled.h1`
  color: #1e293b;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;

export const ButtonAdd = styled.button`
  padding: 12px 24px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  transition: 0.2s;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);

  &:hover { background-color: #2563eb; transform: translateY(-1px); }
`;

export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 15px;
  border: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  margin-right: 8px;
  background-color: ${props => {
    const cores = {
      baixa: "#94a3b8", media: "#f59e0b", alta: "#ef4444",
      pendente: "#64748b", em_producao: "#3b82f6", pronto: "#10b981"
    };
    return cores[props.tipo] || "#333";
  }};
`;

export const ModalWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
    backdrop-filter: blur(2px);
  }

  .modal-box {
    background: white;
    width: 480px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  }

  .modal-header {
    background-color: #3b82f6;
    color: white;
    padding: 20px;
    display: flex; justify-content: space-between; align-items: center;
    .info h3 { margin: 0; font-size: 18px; display: flex; align-items: center; gap: 8px; }
    .info span { font-size: 12px; opacity: 0.9; }
  }

  .tab-container { display: flex; background: #f1f5f9; border-bottom: 1px solid #e2e8f0; }
  
  .tab {
    flex: 1; padding: 15px; text-align: center; cursor: pointer; font-size: 14px;
    font-weight: 600; color: #64748b; display: flex; align-items: center; 
    justify-content: center; gap: 8px; transition: 0.2s;
  }

  .tab.active { color: #3b82f6; background: white; border-bottom: 3px solid #3b82f6; }

  .form-content { padding: 25px; display: flex; flex-direction: column; gap: 12px; }

  .form-label { font-size: 13px; font-weight: 700; color: #475569; margin-bottom: -8px; }

  .form-input, .form-select {
    width: 100%; padding: 12px; border: 1px solid #cbd5e1;
    border-radius: 6px; font-size: 14px; box-sizing: border-box;
  }

  .submit-btn {
    width: 100%; background: #3b82f6; color: white; padding: 15px;
    border: none; border-radius: 8px; font-weight: 700; cursor: pointer; margin-top: 10px;
  }
`;
