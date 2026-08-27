import { Service } from '@angular/core';
import { ApiResultCode } from '../../models/api-result-code';

@Service()
export class ApiMessageService 
{
    private readonly messages: Record<ApiResultCode, string> = {

        [ApiResultCode.DataSaved]:
        'Dane zostały zapisane.',

        [ApiResultCode.DataUpdated]:
        'Dane zostały zaktualizowane.',

        [ApiResultCode.DataDeleted]:
        'Dane zostały usunięte.',

        [ApiResultCode.FileUploaded]:
        'Plik został przesłany.',

        [ApiResultCode.InvalidCredentials]:
        'Nieprawidłowy login lub hasło.',

        [ApiResultCode.InsufficientPermissions]:
        'Nie masz uprawnień do wykonania tej operacji.',

        [ApiResultCode.SessionExpired]:
        'Sesja wygasła. Zaloguj się ponownie.',

        [ApiResultCode.FileNotFound]:
        'Nie znaleziono pliku.',

        [ApiResultCode.InternalError]:
        'Wystąpił nieoczekiwany błąd serwera.'
    };

    getMessage(code: string): string {
        return this.messages[code as ApiResultCode]
        ?? 'Operacja zakończyła się niepowodzeniem.';
    }
}
