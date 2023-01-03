import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}
  create(createAuthorDto: CreateAuthorDto) {
    return this.authorsRepository.save(
      this.authorsRepository.create(createAuthorDto),
    );
  }

  findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  findOne(id: number): Promise<Author> {
    return this.authorsRepository.findOneBy({ id });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.authorsRepository.update({ id }, updateAuthorDto);
  }

  async remove(id: number) {
    return this.authorsRepository.delete(id);
  }
}
