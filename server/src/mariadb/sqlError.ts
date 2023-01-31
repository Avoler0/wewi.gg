import { MariaDBErrorType } from './mariadDbType';


export const postErrorState = {
  23000: 'post를 작성한 사용자가 중복된 제목을 작성하였습니다.'
}

export function postErrorStateMessage(err:MariaDBErrorType) {
  switch(err.sqlState){
    case '22001': {
      const errorRow = err.text.slice(err.text.indexOf(`'`)+1,err.text.lastIndexOf(`'`))
      return { state:413, message:`${errorRow}에 넣으려는 값의 길이가 해당하는 컬럼에 지정된 길이보다 큽니다.` };
    };
    case '23000': return { state:409, message:'사용자가 작성한 적이 있는 제목입니다.' };
    default: return { state:400, message:'에러'};
  }
}

export function accountErrorStateMessage(err:MariaDBErrorType){
  switch(err.sqlState){
    case '22001': {
      const errorRow = err.text.slice(err.text.indexOf(`'`)+1,err.text.lastIndexOf(`'`))
      return { state:413, message:`${errorRow}에 넣으려는 값의 길이가 해당하는 컬럼에 지정된 길이보다 큽니다.` };
    };
    case '23000': return { state:409, message:'이미 존재하는 이메일입니다.' };
    default: return { state:400, message:'에러'};
  }
}

export function matesErrorStateMessage(err:MariaDBErrorType){
  switch(err.sqlState){
    case '22001': {
      const errorRow = err.text.slice(err.text.indexOf(`'`)+1,err.text.lastIndexOf(`'`))
      return { state:413, message:`${errorRow}에 넣으려는 값의 길이가 해당하는 컬럼에 지정된 길이보다 큽니다.` };
    };
    case '23000': return { state:409, message:'이미 게시된 소환사 구인 글 입니다.' };
    default: return { state:400, message:'에러'};
  }
}