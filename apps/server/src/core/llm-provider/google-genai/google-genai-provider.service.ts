import { Injectable } from '@nestjs/common';
import { GoogleGenAIService } from './wrapper/google-genai.service';

@Injectable()
export class GoogleGenAIProviderService {
  constructor(private readonly googleGenAIService: GoogleGenAIService) {}
}
