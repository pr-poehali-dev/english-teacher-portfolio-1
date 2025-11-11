import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">English Teacher</h1>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#education" className="text-foreground hover:text-primary transition-colors">Образование</a>
              <a href="#achievements" className="text-foreground hover:text-primary transition-colors">Достижения</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Данил Горбылев
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Профессиональный преподаватель английского языка
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Помогаю достигать целей через индивидуальный подход и современные методики обучения. 
                Более 10 лет опыта в преподавании английского языка.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Связаться со мной
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/105b9e70-ed5e-4eea-a7cd-b013c83eace3/files/4c92d8d3-4e5d-4505-859c-68b39f20ebbb.jpg"
                alt="Елена Смирнова"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Обо мне</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Разрабатываю программу обучения с учетом ваших целей, уровня и интересов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Результат</h3>
                <p className="text-muted-foreground">
                  Фокусируюсь на практических навыках и достижении конкретных целей
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Современные методы</h3>
                <p className="text-muted-foreground">
                  Использую коммуникативную методику и интерактивные материалы
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Я верю, что каждый может овладеть английским языком при правильном подходе. 
              За годы преподавания я помогла более 200 студентам достичь своих целей — 
              от успешной сдачи международных экзаменов до свободного общения в путешествиях и на работе.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Мой подход основан на создании комфортной атмосферы, где ошибки — это часть обучения, 
              а прогресс измеряется не только оценками, но и вашей уверенностью в использовании языка.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Образование</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/105b9e70-ed5e-4eea-a7cd-b013c83eace3/files/44e2d057-15db-4727-9d17-eec7453b7f49.jpg"
                alt="Образование"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="GraduationCap" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">Магистр филологии</h3>
                    <p className="text-muted-foreground">МГУ имени М.В. Ломоносова, 2012</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Award" className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">CELTA Certificate</h3>
                    <p className="text-muted-foreground">Cambridge Assessment English, 2014</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="FileCheck" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">IELTS Examiner Training</h3>
                    <p className="text-muted-foreground">British Council, 2016</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Trophy" className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">TKT Modules 1-3</h3>
                    <p className="text-muted-foreground">Cambridge Assessment English, 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Достижения учеников</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/105b9e70-ed5e-4eea-a7cd-b013c83eace3/files/26ef16b9-4ed7-455f-a346-8799306d64e3.jpg"
                alt="Достижения"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Успешных студентов</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <p className="text-muted-foreground">Сдали экзамены</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Лет опыта</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <p className="text-muted-foreground">Рекомендуют друзьям</p>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Специализация</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Icon name="Briefcase" className="text-primary mb-3" size={28} />
                <h4 className="font-semibold mb-2">Деловой английский</h4>
                <p className="text-sm text-muted-foreground">Подготовка к переговорам, презентациям и деловой переписке</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Icon name="BookOpen" className="text-secondary mb-3" size={28} />
                <h4 className="font-semibold mb-2">IELTS/TOEFL</h4>
                <p className="text-sm text-muted-foreground">Целенаправленная подготовка к международным экзаменам</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Icon name="Globe" className="text-primary mb-3" size={28} />
                <h4 className="font-semibold mb-2">Разговорный английский</h4>
                <p className="text-sm text-muted-foreground">Развитие беглости речи и преодоление языкового барьера</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Отзывы учеников</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-secondary fill-secondary" size={20} />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Елена помогла мне подготовиться к IELTS за 3 месяца. Получила 7.5 баллов! 
                Занятия были интересными и продуктивными. Рекомендую!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">АМ</span>
                </div>
                <div>
                  <p className="font-semibold">Анна Морозова</p>
                  <p className="text-sm text-muted-foreground">Студентка</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-secondary fill-secondary" size={20} />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Профессиональный подход и внимание к деталям. За полгода занятий значительно 
                улучшил разговорные навыки. Теперь уверенно общаюсь с иностранными партнерами."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">ДК</span>
                </div>
                <div>
                  <p className="font-semibold">Дмитрий Ковалев</p>
                  <p className="text-sm text-muted-foreground">IT-менеджер</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-secondary fill-secondary" size={20} />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Занимаюсь с Еленой уже год. Отличный преподаватель, который умеет мотивировать 
                и делать уроки увлекательными. Наконец-то преодолела языковой барьер!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">МП</span>
                </div>
                <div>
                  <p className="font-semibold">Мария Петрова</p>
                  <p className="text-sm text-muted-foreground">Маркетолог</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Свяжитесь со мной</h2>
          <p className="text-center text-muted-foreground mb-12">
            Готовы начать изучение английского? Напишите мне, и я отвечу в течение 24 часов
          </p>
          
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о ваших целях и уровне английского..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">danil@english.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="Phone" className="text-secondary" size={24} />
              </div>
              <p className="font-semibold">Телефон</p>
              <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="MessageCircle" className="text-primary" size={24} />
              </div>
              <p className="font-semibold">Telegram</p>
              <p className="text-sm text-muted-foreground">@danil_english</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Данил Горбылев</h3>
          <p className="mb-6">Профессиональный преподаватель английского языка</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;