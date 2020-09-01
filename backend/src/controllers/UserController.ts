import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Kairo', email: 'lamarca.kairo@gmail.com' }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Kairo Lamarca', 
        email: 'lamarca.kairo@gmail.com' 
      },
      message: { 
        subject: 'Bem-vindo ao sistema', 
        body: 'Seja bem-vindo' 
      }
    });

    return res.send();
  }
};