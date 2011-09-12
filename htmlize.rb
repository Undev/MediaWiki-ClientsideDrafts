#!/usr/bin/env ruby
# encoding: utf-8

# Need pygmentize that's should be installed through
# easy_install pygments

require 'rubygems'
require 'bundler/setup'
require 'albino'
require 'redcarpet'

SOURCE = 'README.md'.freeze
RESULT = 'README.html'.freeze

class HTMLwithAlbino < Redcarpet::Render::HTML
  include Redcarpet::Render::SmartyPants

  def block_code(code, language)
    Albino.new(code, language).colorize(:O => 'full,encoding=utf-8')
  end
end

markdown = Redcarpet::Markdown.new(HTMLwithAlbino, :fenced_code_blocks => true)

html = markdown.render(IO.read(SOURCE))

File.open(RESULT, 'w') do |f|
  f.print html
end

